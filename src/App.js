import './styles/App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';
import AboutPage from './Pages/AboutPage';


function App() {
  return (
      <div className='App'>  
      <header>
        <Nav />
      </header>
            <Routes>
                <Route path="/HomePage" element={<HomePage/>} />
                <Route path="/BookingPage" element={<BookingPage/>}/>
                <Route path="/AboutPage" element={<AboutPage />} />
            </Routes>
      <footer>
        <Footer />
      </footer>
      </div>
    );
}

export default App;
