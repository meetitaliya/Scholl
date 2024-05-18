import logo from './logo.svg';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Facilities from './Facilities';
import About from './About';
import Class from './Class';
import Team from './Team';
import Layout from './Layout';
import Contact from './Contact';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="header" element={<Header />} />
            <Route path="footer" element={<Footer />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="about" element={<About />} />
            <Route path="class" element={<Class />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
