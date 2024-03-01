import moment from "moment";

const getRelativeTime = (date: string) => {
  const now = moment();
  const then = moment(date);
  const seconds = now.diff(then, "seconds");
  const minutes = now.diff(then, "minutes");
  const hours = now.diff(then, "hours");
  const days = now.diff(then, "days");

  const relativeTime: string =
    (days > 0 ? `${days}d ` : ``) +
    (hours > 0 ? `${hours % 24}h ` : ``) +
    (minutes > 0 ? `${minutes % 60}m ` : ``) +
    `${seconds % 60}s ago`;

  return relativeTime;
};

export default getRelativeTime;
