import { AppShell } from '@mantine/core';
import Header from '../components/Header';

const About = () => {
    return (
        <AppShell header={{ height: 60 }} padding="md">
            <Header />
            <AppShell.Main>
                <div className="container">
                    <h1>About Me</h1>
                    <p>
                        Hi! I'm Vincentius Kosasih, a passionate software developer with experience in embedded systems, FPGA, React, and web development.
                        I enjoy combining hardware and software to build efficient and scalable solutions.
                    </p>
                    <p>
                        I’ve worked on projects like self-driving cars, obstacle detection, and high-frequency trading algorithms using FPGA.
                    </p>
                    <p>
                        Feel free to explore my projects and reach out if you’d like to collaborate!
                    </p>
                </div>
            </AppShell.Main>
        </AppShell>
    );
};

export default About;
