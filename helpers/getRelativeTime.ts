import moment from "moment";

const getRelativeTime = (date: number) => {
  const now = moment();
  const then = moment.unix(date);
  const seconds = now.diff(then, "seconds");
  const minutes = now.diff(then, "minutes");
  const hours = now.diff(then, "hours");
  const days = now.diff(then, "days");

  const showDays = days > 0;

  const relativeTime = showDays
    ? `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s ago`
    : `${hours}h ${minutes % 60}m ${seconds % 60}s ago`;

  return relativeTime;
};

export default getRelativeTime;
