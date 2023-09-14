import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage';
import Reservations from './Pages/ReservationsPage';
import About from './Pages/AboutPage';


function App() {
  return (
      <div className='App'>  
        <Nav />
            <Routes>
                <Route path="/HomePage" element={<Home/>} />
                <Route path="/ReservationsPage" element={<Reservations/>}/>
                <Route path="/AboutPage" element={<About />} />
            </Routes>
        <Footer />
      </div>
    );
}

export default App;
