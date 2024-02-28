const toBase64 = (input: Uint8Array) =>
  Buffer.from(input)
    .toString("base64")
    .replace(/\//g, "_")
    .replace(/\+/g, "-")
    .replace(/=+$/, "");

export default toBase64;
