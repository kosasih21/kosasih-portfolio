import { useEffect, useState } from 'react';
import { AppShell } from '@mantine/core';
// import Header from '../components/Header';
// import ParticlesBg from '../components/ParticlesBg';

const descriptions = [
    "Vincentius Kosasih :D",
    "GT alumni",
    "graduating class of 2025",
    "a CompE major",
    "focused in embedded systems",
    "a volleyball player",
    "a Jesus follower",
    "looking forward to meeting you",
];

const Home = () => {
    console.log('Home component loaded');
    
    const prefix = "Hi there, I'm ";
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const typingSpeed = 100;
    const deletingSpeed = 75;
    const pauseTime = 2000;
    const initialPauseTime = 3500;

    useEffect(() => {
        let typingTimeout: NodeJS.Timeout;
        const currentDescription = descriptions[index];

        if (isDeleting) {
            typingTimeout = setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
                if (text === '') {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % descriptions.length);
                }
            }, deletingSpeed);
        } else {
            typingTimeout = setTimeout(() => {
                setText((prev) => currentDescription.slice(0, prev.length + 1));
                if (text === currentDescription) {
                    const holdTime = 
                        index === 0 || index === descriptions.length - 1 ? initialPauseTime : pauseTime;
                    
                    setTimeout(() => setIsDeleting(true), holdTime);
                }
            }, typingSpeed);
        }

        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, index]);




    return (
        <AppShell header={{ height: 60 }} padding="md">
            {/* <Header />
            <ParticlesBg /> */}
            <AppShell.Main style={{ 
                backgroundColor: 'transparent',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div className="container fade-in">
                    <div className="hero">
                        <div className="wrapper">
                            <h1 className="typing-demo non-clickable">
                                {prefix}
                                <span>{text}</span>
                            </h1>
                        </div>
                        <p className="non-clickable">
                            I'm a software developer passionate about embedded systems, React, Python, and full stack development.
                            I love combining hardware and software to build efficient and scalable solutions with real-world applications.
                        </p>
                        <div className="link-container">
                            <a href="/projects" className="button">
                                View My Projects
                            </a>
                            <a href="/about" className="secondary-button">
                                Learn About Me
                            </a>
                        </div>
                    </div>
                </div>
            </AppShell.Main>
        </AppShell>
    );
};

export default Home;
