import React from "react";

const VideoBox = ({ item }) => {
  return (
    <a
      href={item.video_url}
      target="_blank"
      className="videoBox"
      style={{ backgroundImage: `url(${item.picture})` }}
    >
      {/* Другие элементы */}
    </a>
  );
};

export default VideoBox;
