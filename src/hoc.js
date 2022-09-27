import moment from "moment"
import { getDifferenceTime } from "./utils";

export const withDateDifference = (Component, date) => {
    const now = moment(new Date());
    const end = moment(date);
    var duration = moment.duration(now.diff(end));
    const newDate = getDifferenceTime(duration);

    return <Component date={newDate} />
}