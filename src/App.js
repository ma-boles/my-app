import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';
import AboutPage from './Pages/AboutPage';


function App() {
  return (
      <div className='App'>  
        <Nav />
            <Routes>
                <Route path="/HomePage" element={<HomePage/>} />
                <Route path="/BookingPage" element={<BookingPage/>}/>
                <Route path="/AboutPage" element={<AboutPage />} />
            </Routes>
        <Footer />
      </div>
    );
}

export default App;
