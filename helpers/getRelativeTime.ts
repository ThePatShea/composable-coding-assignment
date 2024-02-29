import moment from "moment";

const getRelativeTime = (date: number) => {
  const now = moment();
  const then = moment.unix(date);
  const seconds = now.diff(then, "seconds");
  const minutes = now.diff(then, "minutes");
  const hours = now.diff(then, "hours");

  const relativeTime = `${hours}h ${minutes % 60}m ${seconds % 60}s ago`;

  return relativeTime;
};

export default getRelativeTime;
