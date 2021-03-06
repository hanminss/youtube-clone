import React from "react";
import styles from "./video_detail.module.css";
const VideoDetail = ({ video, video: { snippet } }) => {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        title="video"
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      />
      <h2>{snippet.title}</h2>
      <h2>{snippet.channelTitle}</h2>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
