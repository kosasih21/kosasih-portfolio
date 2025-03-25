import { useEffect } from 'react';
import { AppShell, Grid, Text, Image, Divider } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { initScrollAnimation } from '../../utils/scrollAnimation';


const images = [
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

const FpgaHFT = () => {
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} className="carousel-image" />
        </Carousel.Slide>
    ));

    useEffect(() => {
        initScrollAnimation();
    }, []);

    return (
        <AppShell header={{ height: 60 }} padding="md">
            <AppShell.Main style={{ 
                backgroundColor: 'transparent',
                backdropFilter: 'blur(3px)',
            }}>
                <div className="projects-container fade-in">
                    <h1>FPGA For Finance (HFT)</h1>
                    <p className="subheading">
                        Contributors: Vincentius Kosasih, Alex Avila, Charles D'Souza, Ahmed, I forgot
                    </p>

                    <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.08)', marginTop: '32px' }} className="section-divider" />

                    <Grid gutter="xl" style={{ marginTop: '32px' }}>
                        {/* Left Side */}
                        <Grid.Col span={6}>
                            <h2 className="fade-in-view">Project Overview</h2>
                            <Text className="about-text fade-in-view">
                                Hi! I'm Vincentius Kosasih, a passionate software developer with experience in embedded systems, product, and full stack development.  
                                I'm currently a graduating senior at Georgia Tech, where I study Computer Engineering.  
                                I envision working in a high-performing, fast-paced environment where I will learn and provide technical expertise  
                                integrating hardware with software.  
                                <br />
                                <br />
                                Check out my experience and education below, or visit my projects page to see what I work on as a passion.
                            </Text>
                        </Grid.Col>

                        {/* Right Side */}
                        <Grid.Col span={6}>
                            <Carousel
                                withIndicators
                                height={400}
                                slideSize="100%"
                                slideGap="md"
                                loop
                                align="center"
                                styles={{
                                    control: {
                                        backgroundColor: '#1DB954',
                                    },
                                }}
                                className="fade-in-view"
                            >
                                {slides}
                            </Carousel>
                        </Grid.Col>
                    </Grid>


                    <h2 className="fade-in-view" style={{ marginTop: 55, marginBottom: 5 }}>Technical Details</h2>
                    <p className="fade-in-view">Key Skills: C++, Arduino, Embedded Systems</p>
                    <p className="fade-in-view">
                        •	Contributed significantly to software development within an Agile/Sprint team on an embedded systems project for the Naval Air Warfare 
                            Center Aircraft Division, participating in over 50 sprint meetings and streamlining task coordination.
                        •	Played a key role in developing a full stack data application for electronic warfare, working on the front-end with React.js and the 
                            back end with REST API Integrations, leading to a 25% increase in responsiveness and performance improvements.
                        •	Developed and executed 100+ unit test cases to ensure project functionality, reliability, and security, which resulted in identifying 
                            and resolving critical software issues early, decreasing overall bug count and test coverage by over 20%.
                        •	Engaged in all phases of development, from planning and design to implementation and review, contributing to over 30 code reviews 
                            and suggesting improvements that enhanced code maintainability and decreased overall technical debt.
                    </p>

                    <h2 className="fade-in-view" style={{ marginTop: 20, marginBottom: 5 }}>Challenges and Insights</h2>
                    <p className="fade-in-view">Hardware Calibration, Accelerated Delivery, and Complexity Management</p>
                    <p className="fade-in-view">
                        •	Spearheaded Agile sprint initiatives, documenting over 50 software QA processes and iterating test scenarios, leading to the 
                        identification and resolution of key software points, improving building management software performance by 20%.
                        • 	Performed data-driven analysis on building management software benchmarks, isolating critical performance bottlenecks within internal 
                        data structures and algorithms and formulating optimization strategies according to project roadmaps.
                        • 	Analyzed complex customer feedback on product performance and product lifecycle, transforming it into 30+ precise technical requirements 
                        that guided strategic product improvements, leading to a project revival.
                        • 	Garnered strong support from senior executives and vice presidents by presenting a compelling case for a high-impact project initiative, 
                        successfully securing over $10 million in funding and strategic backing to drive the project's success.
                    </p>

                    <div className="link-container fade-in-view">
                        <a href="/contact" className="secondary-button">
                             Learn More
                        </a>
                    </div>
                </div>
            </AppShell.Main>
        </AppShell>
    );
};

export default FpgaHFT;
