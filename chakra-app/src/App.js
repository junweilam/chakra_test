import logo from './logo.svg';
import './App.css';
import NavBar from "./components/index"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Home from "./pages";

import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const colors={
  brand:{
    900: '#F8FF00',
    800: '#000000',
    700: '#000000',
  },
}

const theme = extendTheme({colors});

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;
