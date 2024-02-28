import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(isSameOrAfter);
const isAtLeastToday = (value: Date) => {
  const startOfToday = dayjs().startOf("day");
  const givenDate = dayjs(value);
  return givenDate.isSameOrAfter(startOfToday);
};

export default isAtLeastToday;
