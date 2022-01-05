import logo from "./logo.svg";
import "./App.css";
import { useData } from "./hooks/useData";

function App() {
  const { data, error } = useData("딩고");
  if (error) return <p>fuck</p>;
  if (!data) return <p>wait ....</p>;
  const items = data.items;
  console.log(items);

  return (
    <>
      <header>Youtube</header>
      {items.map((item) => {
        return <p>{item.snippet.title}</p>;
      })}
    </>
  );
}

export default App;
