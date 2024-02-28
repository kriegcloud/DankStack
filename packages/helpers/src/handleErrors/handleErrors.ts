import { TRPCError } from "@trpc/server";
import { z, ZodError } from "zod";

export type ApiError = {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
};

const isApiErrorResponse = (res: any): res is ApiError => {
  return (
    res && res.type && res.title && res.status && res.detail && res.instance
  );
};
export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message as string;
};

export const transformZodErrors = (
  issues: z.ZodIssue[],
): Record<string, string> => {
  return issues.reduce(
    (acc, issue) => {
      if (issue.path.length === 0) {
        // If the path is empty, it's a top-level error
      }
      const path = issue.path.join("."); // Joining nested paths

      if (!acc[path]) {
        acc[path] = issue.message;
      } else {
        acc[path] += `; ${issue.message}`; // Concatenating messages for the same path
      }
      return acc;
    },
    {} as Record<string, string>,
  );
};

interface HandleMutationErrorsProps {
  pkInput: string;
  error: unknown;
}
export const handleMutationErrors = ({
  pkInput,
  error,
}: HandleMutationErrorsProps) => {
  const msg = getErrorMessage(error);
  if (msg.includes("Duplicate")) {
    throw new TRPCError({
      code: "CONFLICT",
      message: `${pkInput} already exists.`,
    });
  } else {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: msg,
    });
  }
};
