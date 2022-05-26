import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Song from "./components/Song";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:song" element={<Song />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
