import moment from "moment";

const getRelativeTime = (date: string): string => {
  const now: moment.Moment = moment();
  const then: moment.Moment = moment(date);
  const seconds: number = now.diff(then, "seconds");
  const minutes: number = now.diff(then, "minutes");
  const hours: number = now.diff(then, "hours");
  const days: number = now.diff(then, "days");

  const relativeTime: string =
    (days > 0 ? `${days}d ` : ``) +
    (hours > 0 ? `${hours % 24}h ` : ``) +
    (minutes > 0 ? `${minutes % 60}m ` : ``) +
    `${seconds % 60}s ago`;

  return relativeTime;
};

export default getRelativeTime;
