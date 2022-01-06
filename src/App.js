import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Searchheader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import { API_KEY } from "./constants/API_KEY";

function App() {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=25&q=${query}&type=video&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
    // search는 id가 객체로 오기 때문에 문제가 된다 따라서 id를 따로 빼서 다시 넣어준다.
  };

  // [] 이기 때문에 마운트 되었을때 한번만
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json()) // txt -> json 으로 바꿔주는 게 좋다.
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className={styles.app}>
      <Searchheader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
