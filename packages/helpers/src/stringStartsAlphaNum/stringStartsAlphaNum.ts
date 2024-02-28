const stringStartsAlphaNum = (value: string): boolean => {
  // match string that doesn't start with whitespace and non-alpha/numerics OR allow empty string
  const pattern = /^\b[A-Za-z0-9]+(.*)+$|^$/gim;
  return pattern.test(value);
};

export default stringStartsAlphaNum;
