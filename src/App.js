import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/navbar";
import Home from "./component/Home/Home";
import Footer from "./component/Footer";
import About from "./component/About/About";
import "./style.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
