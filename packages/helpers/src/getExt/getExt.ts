const getExt = (fileName: string) =>
  /[.]/.exec(fileName) ? /[^.]+$/.exec(fileName) : undefined;

export default getExt;
