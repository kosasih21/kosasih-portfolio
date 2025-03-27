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

const SelfDrivingCar = () => {
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
                    <h1>Mini Self-Driving Car</h1>
                    <p className="subheading">
                        Contributors: Vincentius Kosasih, George Lee @LinkedIn
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

                            <div className="fade-in-view" style={{ marginTop: '20px' }}>
                                <a 
                                    href="https://github.com/kosasih21/mini-self-driving-car" 
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
                    <p className="fade-in-view"><strong>Key Skills:</strong> C++, Arduino, Embedded Systems, Obstacle Detection, Motor Control</p>
                    <p className="fade-in-view">
                        • Utilized three HC-SR04 ultrasonic sensors (front, left, right) to detect surrounding obstacles in real time. Sensor data was collected via `pulseIn` timing functions and converted into distance measurements in centimeters. <br />
                        • Implemented a control loop using basic `if-else` logic to determine navigation behavior based on proximity readings. The system prioritizes forward motion unless the front is obstructed. <br />
                        • Designed modular motor control functions (`spinMotorsForward`, `moveBackward`, `turnLeft`, `turnRight`, `stopMotors`) for readability and easy tuning of motion behavior. <br />
                        • Used GPIO pins on the Arduino Uno to control a differential drive configuration, directing left and right motors through H-bridge logic signals. <br />
                        • Included safety and stability via delays and motor stop conditions to avoid erratic behavior between state transitions.
                    </p>


                    <h2 className="fade-in-view" style={{ marginTop: 20, marginBottom: 5 }}>Challenges and Insights</h2>
                    <p className="fade-in-view"><strong>Key Concepts:</strong> Hardware Calibration, Response Timing, Simplicity in Control Logic</p>
                    <p className="fade-in-view">
                        • One of the major challenges was ensuring consistent sensor readings, especially when dealing with reflections and noise from nearby objects. This required calibrating trigger and echo timing and validating sensor placement for optimal coverage. <br />
                        • Balancing responsiveness with stability involved fine-tuning `delay()` durations to reduce jitter while maintaining reactivity to sudden obstacles. <br />
                        • Keeping the logic simple yet effective led to an emphasis on modular function design. Breaking up motion behavior into isolated units not only improved testability but also made debugging straightforward. <br />
                        • Managing a basic robot without any feedback loop (e.g., no encoders or PID) reinforced the importance of environmental awareness through sensing alone, pushing for clever fallback behaviors like reversing and retesting after failed turns. <br />
                        • This project emphasized the value of building foundational control systems before implementing more complex autonomy features like mapping or path planning.
                    </p>


                    <h2 className="fade-in-view" style={{ marginTop: 20, marginBottom: 5 }}>Potential Extensions</h2>
                    <p className="fade-in-view"><strong>Next Steps:</strong> Feedback Control, Smarter Navigation, and Better Testing</p>
                    <p className="fade-in-view">
                        • I would integrate wheel encoders and implement a basic PID control loop to give the robot feedback on its movement, enabling smoother turns and more reliable straight-line motion. <br />
                        • For more intelligent obstacle avoidance, I’d implement a mapping or memory system—using either a grid or occupancy map—so the robot could recognize repeated obstacles and reroute more strategically. <br />
                        • I would also replace `delay()` with non-blocking timers using `millis()` to improve responsiveness and allow for sensor multitasking. This would open the door to more reactive and scalable behavior. <br />
                        • Finally, I'd expand testing conditions: using tighter corridors, variable lighting, and floor materials to expose the robot to real-world inconsistencies and make the control logic more robust.
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

export default SelfDrivingCar;
