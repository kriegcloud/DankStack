const generateId = () => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!-*()";
  const length = 10;

  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  const date = new Date().toISOString().split("T")[0]?.replace(/-/g, "");
  return `${date}_${result}`;
};

export default generateId;
