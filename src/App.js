import { useEffect, useState } from "react";
import "./App.css";
import VideoList from "./components/video_list/video_list";
import { API_KEY } from "./constants/API_KEY";

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState("ellie");

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
  return <VideoList videos={videos} />;
}

export default App;
