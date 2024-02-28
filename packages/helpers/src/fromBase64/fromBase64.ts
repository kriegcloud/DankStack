const fromBase64 = (input: string) =>
  new Uint8Array(
    Buffer.from(input.replace(/_/g, "/").replace(/-/g, "+"), "base64"),
  );

export default fromBase64;
