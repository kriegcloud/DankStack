// ** Returns initials from string
const getInitials = (string: string) =>
  string
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "");

export default getInitials;
