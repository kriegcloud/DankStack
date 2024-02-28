import type { PermissionType } from "@e2/types";

export const findPerm = (permList: PermissionType[], perm: string) =>
  permList.find((userPerm) => userPerm.pageActionId === perm);

export const hasPermissions = (
  userPermissions: PermissionType[],
  requiredPermissions: PermissionType[],
): boolean => {
  return requiredPermissions.every(
    (perm) => !!findPerm(userPermissions, perm.pageActionId),
  );
};

export const hasOneOfPermissions = (
  userPermissions: PermissionType[],
  givenPermissions: PermissionType[],
): boolean => {
  return givenPermissions.some(
    (perm) => !!findPerm(userPermissions, perm.pageActionId),
  );
};
