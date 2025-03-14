import { AppShell, Blockquote } from '@mantine/core';
import Header from '../components/Header';

const About = () => {
    return (
        <AppShell header={{ height: 60 }} padding="md">
            <Header />
            <AppShell.Main>
                <div className="container fade-in">
                    <h1>About Me</h1>
                    <p>
                        Hi! I'm Vincentius Kosasih, a passionate software developer with experience in embedded systems, FPGA, React, and web development.
                        I enjoy combining hardware and software to build efficient and scalable solutions.
                    </p>
                    <p>
                        I’ve worked on projects like self-driving cars, obstacle detection, and high-frequency trading algorithms using FPGA.
                    </p>
                    
                    {/* ✅ Added Blockquote */}
                    <Blockquote color="green" cite="– Master Oogway">
                        "Yesterday is history, tomorrow is a mystery,
                        but today is a gift,
                        that is why it is called the present."
                    </Blockquote>

                    <p>
                        Feel free to explore my projects and reach out if you’d like to collaborate!
                    </p>
                </div>
            </AppShell.Main>
        </AppShell>
    );
};

export default About;
