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

const ArrowDetection = () => {
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
                    <h1>Arrow Detection</h1>
                    <p className="subheading">
                        Contributors: Vincentius Kosasih, Justin Ayiih @LinkedIn, George Lee @LinkedIn
                    </p>

                    <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.08)', marginTop: '32px' }} className="section-divider" />

                    <Grid gutter="xl" style={{ marginTop: '32px' }}>
                        {/* Left Side */}
                        <Grid.Col span={6}>
                            <h2 className="fade-in-view">Project Overview</h2>
                            <Text className="about-text fade-in-view">
                                An embedded archery scoring prototype using four VL53L0X time-of-flight sensors mounted around a circular arrow board.  
                                The system collects distance readings and computes a weighted average to estimate the arrow's impact point and corresponding score.  
                                This low-cost solution highlights how sensor fusion and geometry can be applied for real-time scoring in sports tech.
                            </Text>

                            <div className="fade-in-view" style={{ marginTop: '20px' }}>
                                <a 
                                    href="https://github.com/kosasih21/arrow-detection" 
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
                                    src="../../assets/arrowDemo.jpg" 
                                    alt="Arrow Detection" 
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
                    <p className="fade-in-view">Key Skills: Arduino, VL53L0X Sensors, C++, Weighted Averaging, Sensor Fusion</p>
                    <p className="fade-in-view">
                        • Initialized four VL53L0X time-of-flight sensors via I2C using dynamic address reassignment and sequential boot-up via shutdown pins to avoid address conflicts. <br />
                        • Mapped each sensor's physical position around a circular arrow board (at 0°, 45°, 90°, and 135°) and stored their readings in a structured array for spatial referencing. <br />
                        • Implemented a weighted averaging algorithm that uses the inverse of the sensor readings to estimate the arrow’s landing point with positional smoothing. <br />
                        • Calculated the distance from a manually calibrated center offset and translated it into a scoring system resembling real-world archery. <br />
                        • All code was optimized for loop timing and modularity to support potential future upgrades such as real-time display or Bluetooth transmission.
                    </p>

                    <h2 className="fade-in-view" style={{ marginTop: 20, marginBottom: 5 }}>Challenges and Insights</h2>
                    <p className="fade-in-view">Sensor Synchronization, Accuracy Tradeoffs, and Geometric Complexity</p>
                    <p className="fade-in-view">
                        • Coordinating four identical I2C sensors posed challenges due to address conflicts—solved through staggered powering and unique address assignments with `begin(address)`. <br />
                        • Sensor reflections near board edges introduced false positives, requiring manual subtraction of offset noise and limiting the valid distance range. <br />
                        • Geometric positioning of sensors was not perfectly symmetrical in practice, demanding both calibration and compensation logic for weighted averaging to be accurate. <br />
                        • The use of weighted average instead of triangulation was a practical simplification but highlighted limitations in precision due to the relatively low angular coverage (only 4 sensors). <br />
                        • Debugging was made easier by structured console outputs, but tuning the smoothing factor and calibration constants still required iterative testing.
                    </p>

                    <h2 className="fade-in-view" style={{ marginTop: 20, marginBottom: 5 }}>Potential Extensions</h2>
                    <p className="fade-in-view">
                        • I would expand the system to 8 or 12 VL53L0X sensors placed at finer angles (e.g., every 30°) to significantly increase resolution and reduce directional blind spots. <br />
                        • A simple graphical interface could visualize the arrow’s estimated landing location on a web dashboard or LCD screen, useful for debugging and demos. <br />
                        • I'd also introduce automatic calibration routines, where the system adjusts its center offset and noise filters based on observed sensor behavior during a warm-up period. <br />
                        • Eventually, I would consider replacing the inverse weighting method with true multilateration or sensor fusion techniques for greater physical accuracy. <br />
                        • Integrating data logging or wireless communication would help with long-term analysis and performance tracking over multiple sessions.
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

export default ArrowDetection;
