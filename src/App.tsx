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
import Contact from './pages/Contact';
import About from './pages/About';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            {/* ✅ Global Layout */}
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
                {/* ✅ Global Header */}
                <Header />

                {/* ✅ Persistent Background */}
                <ParticlesBg />

                {/* ✅ Route Handling */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </AppShell>
        </BrowserRouter>
    );
};

export default App;
