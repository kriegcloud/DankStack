const genSelectOptions = (options: string[]) =>
  options.map((opt) => ({ id: opt, label: opt }));

export default genSelectOptions;
