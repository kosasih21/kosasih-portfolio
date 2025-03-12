import { AppShell } from '@mantine/core';
import Header from '../components/Header';

const Home = () => {
    return (
        <AppShell header={{ height: 60 }} padding="md">
            <Header />
            <AppShell.Main>
                <div className="container">
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
