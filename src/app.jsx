import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Searchheader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };
  // [] 이기 때문에 마운트 되었을때 한번만
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <Searchheader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
