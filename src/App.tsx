import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;

// import ParticlesBg from './components/ParticlesBg';

// function App() {
//     return (
//         <div>
//             <ParticlesBg />
//             <h1>Hello World</h1>
//         </div>
//     );
// }

// export default App;
