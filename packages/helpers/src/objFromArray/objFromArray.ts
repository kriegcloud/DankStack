const objFromArray = (arr: any[], key = "id"): NonNullable<unknown> =>
  arr.reduce((accumulator, current) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});

export default objFromArray;
