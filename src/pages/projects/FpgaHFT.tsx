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
                                Designed a high-frequency trading (HFT) benchmark that evaluates FPGA-based performance versus traditional CPU implementations in C++. 
                                The project focused on comparing latency and throughput of streaming vs. batch processing models. 
                                We processed realistic historical market data and simulated trading conditions to observe real-time behavior under both paradigms. 
                                Hardware modules were written in Verilog and integrated into a development board, while C++ provided the baseline software model. 
                                The goal was to investigate how FPGAs could accelerate finance workloads with tighter timing constraints and higher determinism.
                            </Text>

                            <div className="fade-in-view" style={{ marginTop: '20px' }}>
                                <a 
                                    href="https://github.com/CharlesD1423/FPGA-for-Finance" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="secondary-button"
                                >
                                    View Code
                                </a>
                            </div>
                        </Grid.Col>

                        {/* Right Side */}
                        <Grid.Col span={6}>
                            <Image 
                                src="../../assets/fpgaDemo.png" 
                                alt="Example outpute" 
                                radius="md"
                                className="fade-in-view"
                                style={{
                                    width: '100%',
                                    height: '450px',
                                    objectFit: 'cover',
                                }}
                            />
                        </Grid.Col>
                    </Grid>


                    <h2 className="fade-in-view" style={{ marginTop: 55, marginBottom: 5 }}>Technical Details</h2>
                    <p className="fade-in-view">Key Skills: C++, Arduino, Embedded Systems</p>
                    <p className="fade-in-view">
                        •	Under Construction
                    </p>

                    <h2 className="fade-in-view" style={{ marginTop: 20, marginBottom: 5 }}>Challenges and Insights</h2>
                    <p className="fade-in-view">Hardware Calibration, Accelerated Delivery, and Complexity Management</p>
                    <p className="fade-in-view">
                        •	Under Construction
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
