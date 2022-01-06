import React from "react";
import styles from "./video_item.module.css";

// props 안에 video 가 있으면 바로 매칭시켜주고 비디오 안에 스니핏이 있으면 바로 매칭시켜준다.
const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="Video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
