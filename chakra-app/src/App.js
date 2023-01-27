import logo from './logo.svg';
import './App.css';
import NavBar from "./components/index"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Home from "./pages";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
    </Router>
  );
}

export default App;
