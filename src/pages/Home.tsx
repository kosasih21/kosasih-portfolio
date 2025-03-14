import { AppShell } from '@mantine/core';
import Header from '../components/Header';
import ParticlesBg from '../components/ParticlesBg';

const Home = () => {
    console.log('Home component loaded'); // ✅ Debug check
    
    return (
        <AppShell header={{ height: 60 }} padding="md">
            <Header />
            <AppShell.Main style={{ position: 'relative', overflow: 'hidden' }}>
                <ParticlesBg />
                <div className="container fade-in">
                    <div className="hero">
                        <h1>Hi, I'm Vincentius Kosasih 👋</h1>
                        <p>
                            I'm a software developer passionate about embedded systems, FPGA, React, and web development.
                            I love combining hardware and software to build efficient and scalable solutions.
                        </p>
                        <div className="link-container">
                            <a href="/projects" className="button">
                                View My Projects
                            </a>
                            <a href="/contact" className="secondary-button">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </AppShell.Main>
        </AppShell>
    );
};

export default Home;
