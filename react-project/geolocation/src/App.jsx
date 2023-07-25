import { useState } from "react";
import "./App.css";
import useGetLocation from "./hooks/useGetLocation";

function App() {
  const {
    getLocation,
    data: { isLoading, latitude, longitude, error },
  } = useGetLocation();

  const [count, setCount] = useState(0);
  const handleLocation = () => {
    setCount((preCount) => preCount + 1);
    getLocation();
  };

  // content
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (!isLoading && error) {
    content = <p>{error}</p>;
  }

  if (!isLoading && latitude && longitude) {
    content = (
      <p>
        Your GPS position:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.openstreetmap.org/#map=16/${latitude}/${longitude}`}
        >
          {latitude}, {longitude}
        </a>
      </p>
    );
  }
  return (
    <div className="location-area">
      <button onClick={handleLocation}>get my position</button>
      {content}
      <p>your requested position {count} times</p>
    </div>
  );
}

export default App;
