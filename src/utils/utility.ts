import dayjs from 'dayjs';
import { UserData } from "../types/dataType";

type GetLocalUserType = () => UserData | null;

const getLocalUser:GetLocalUserType = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user) as UserData;
  } else {
    return null;
  }
};

const dateParser = (date: Date | string | undefined): string => {
  if(!date) return ''
  const d = new Date(date);
  const today = new Date();
  const oneWeek = 7 * 24 * 60 * 60 * 1000; // milliseconds in a week
  const oneYear = 365 * 24 * 60 * 60 * 1000; // milliseconds in a year

  if (d.toDateString() === today.toDateString()) {
    // If today, return time in 12-hour format with hours and minutes
    return dayjs(d).format('h:mm A');
  } else if (today.getMilliseconds() - d.getMilliseconds() < oneWeek) {
    // If under a week, return the day of the week
    return dayjs(d).format('dddd');
  } else if (today.getMilliseconds() - d.getMilliseconds() < oneYear) {
    // If under a year, return the date in "Month Day" format
    return dayjs(d).format('MMM D');
  } else {
    // Otherwise, return the date in "DD/MM/YYYY" format
    return dayjs(d).format('DD/MM/YYYY');
  }
};
export { getLocalUser, dateParser }