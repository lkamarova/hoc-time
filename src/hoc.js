import moment from "moment"
import { getDifferenceTime } from "./utils";

export const withDateDifference = (Component) => (props) => {
    const now = moment(new Date());
    const end = moment(props.date);
    var duration = moment.duration(now.diff(end));
    const newDate = getDifferenceTime(duration);

    return <Component {...props} date={newDate} />
}