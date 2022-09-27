import { withDateDifference } from "../hoc";

const DateTimePretty = ({ Component, date }) => withDateDifference(Component, date);

export default DateTimePretty;