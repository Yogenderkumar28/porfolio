import "./App.css";
import NavBar from "./component/navbar";
import Home from "./component/Home/Home";
import Footer from "./component/Footer";
import About from "./component/About/About";
import "./style.css";
import Projects from "./component/Projects/Projects";
import Resume from "./component/Resume/Resume";
import Education from "./component/Education/Education.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
