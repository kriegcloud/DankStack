import { z } from "zod";

import { MaybeDate, MaybeValidDate, SafeDateParser } from "@e2/types";

const safeDateParse: SafeDateParser = (value: MaybeValidDate): MaybeDate => {
  if (value === null || value === undefined) {
    return undefined;
  }

  const maybeDate =
    value instanceof Date
      ? z.date().safeParse(value)
      : z.coerce.date().safeParse(value); // Allows new Date(null) despite tsconfig "strict" setting

  return maybeDate.success ? maybeDate.data : undefined;
};

export default safeDateParse;
