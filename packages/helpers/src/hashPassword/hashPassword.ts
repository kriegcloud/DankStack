import * as crypto from "crypto";

import type { PersistedPasswordType } from "@e2/types";

const PASSWORD_LENGTH = 256;
const SALT_LENGTH = 64;
const ITERATIONS = 10000;
const DIGEST = "sha256";
const BYTE_TO_STRING_ENCODING = "hex"; // this could be base64, for instance

export const hashPassword = (
  password: string,
): Promise<PersistedPasswordType> => {
  return new Promise<PersistedPasswordType>((accept, reject) => {
    const salt = crypto
      .randomBytes(SALT_LENGTH)
      .toString(BYTE_TO_STRING_ENCODING);

    crypto.pbkdf2(
      password,
      salt,
      ITERATIONS,
      PASSWORD_LENGTH,
      DIGEST,
      (error, hash) => {
        if (error) {
          return reject(error);
        }
        accept({
          passwordSalt: salt,
          passwordHash: hash.toString(BYTE_TO_STRING_ENCODING),
          passwordIterations: ITERATIONS,
        });
      },
    );
  });
};

interface VerifyPasswordArgs {
  passwordAttempt: string;
  passwordHash: string;
  passwordSalt: string;
  passwordIterations: number;
}
export const verifyPassword = ({
  passwordAttempt,
  passwordHash,
  passwordSalt,
  passwordIterations,
}: VerifyPasswordArgs): Promise<boolean> => {
  return new Promise<boolean>((accept, reject) => {
    crypto.pbkdf2(
      passwordAttempt,
      passwordSalt,
      passwordIterations,
      PASSWORD_LENGTH,
      DIGEST,
      (error, hash) => {
        if (error) {
          return reject(error);
        }
        accept(passwordHash === hash.toString(BYTE_TO_STRING_ENCODING));
      },
    );
  });
};

export default hashPassword;
