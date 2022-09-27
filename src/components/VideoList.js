import Video from "./Video";

const VideoList = ({ list }) => {
    return list?.map((item, idx) => <Video key={idx} url={item.url} date={item.date} />);
}

export default VideoList;