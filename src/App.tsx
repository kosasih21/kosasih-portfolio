// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home.tsx';
// import Projects from './pages/Projects.tsx';
// import Contact from './pages/Contact.tsx';
// import About from './pages/About.tsx';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/projects" element={<Projects />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/about" element={<About />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import Header from './components/Header';
import ParticlesBg from './components/ParticlesBg';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SelfDrivingCar from './pages/projects/SelfDrivingCar';
import PhotoGallery from './pages/projects/PhotoGallery';
import Portfolio from './pages/projects/Portfolio';
import FpgaHFT from './pages/projects/FpgaHFT';
import ArrowDetection from './pages/projects/ArrowDetection';
import Game from './pages/projects/Game';
import Contact from './pages/Contact';
import About from './pages/About';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AppShell
                header={{ height: 60 }}
                padding="md"
                styles={{
                    main: {
                        width: '100%',
                        maxWidth: '100vw',
                        overflowX: 'hidden',
                        backgroundColor: 'transparent',
                        backdropFilter: 'blur(3px)',
                    },
                }}
            >
                {/* Global Header */}
                <Header />

                {/* Global Background */}
                <ParticlesBg />

                {/* Route Handling */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />

                    <Route path="/projects/self-driving-car" element={<SelfDrivingCar />}/>
                    <Route path="/projects/photo-gallery" element={<PhotoGallery />}/>
                    <Route path="/projects/portfolio" element={<Portfolio />}/>
                    <Route path="/projects/fpga-hft" element={<FpgaHFT />}/>
                    <Route path="/projects/arrow-detection" element={<ArrowDetection />}/>
                    <Route path="/projects/game" element={<Game />}/>

                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </AppShell>
        </BrowserRouter>
    );
};

export default App;
