const notEmpty = <T>(
  value: T[] | undefined,
): value is NonNullable<typeof value> => !!value && value.length > 0;

export default notEmpty;
