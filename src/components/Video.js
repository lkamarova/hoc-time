import DateTime from "./DateTime";
import DateTimePretty from "./DateTimePretty";

const Video = ({ url, date }) => {
  return (
    <div className="video">
      <iframe
        title="video"
        src={url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <DateTimePretty Component={DateTime} date={date} />
    </div>
  );
};

export default Video;
