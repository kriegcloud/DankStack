/**
 * @description Format milliseconds to string
 * @param duration in milliseconds
 * @returns formatted string
 */
const formatMilliseconds = (duration: number): string => {
  const totalSeconds = Math.floor(duration / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();
  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${formattedSeconds}`;
};

export default formatMilliseconds;
