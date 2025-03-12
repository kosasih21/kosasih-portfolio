import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
