import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Song from "./components/Song";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">
          <img src="/sevaztian.png" alt="sevaztian" />
        </Link>
        <p>I'm currently working on this website.</p>
        <p>
          Please follow me on twitter for updates:{" "}
          <a
            href="https://twitter.com/_sevaztian"
            target="_blank"
            rel="noopener noreferrer"
          >
            @_sevaztian
          </a>
        </p>
        <br />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:song" element={<Song />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
