import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Explore } from "./Pages/Explore";
import { Home } from "./Pages/Home";
import { ContainerPage } from "./Pages/ContainerPage";
import { WatchLater } from "./Pages/WatchLater";
import { Video } from "./Pages/Video";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContainerPage />}>
          <Route path="/explore" element={<Explore />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/watch-later" element={<WatchLater/>}/>
          <Route path="/video-listing" element={<Video/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
