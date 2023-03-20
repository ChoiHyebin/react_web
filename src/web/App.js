import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Discography from './routes/Discography';
import Galleryy from './routes/Gallery';
import Video from './routes/Video';
import Notice from './routes/Notice';
import Schedule from './routes/Schedule';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/discography' element={<Discography />} />
                    <Route path='/gallery' element={<Galleryy />} />
                    <Route path='/video' element={<Video />} />
                    <Route path='/Notice' element={<Notice />} />
                    <Route path='/Schedule' element={<Schedule />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;