import { AppShell, Image, Grid, Title, Text, Button, Divider } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

const images = [
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

const About = () => {
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} className="carousel-image" />
        </Carousel.Slide>
    ));

    return (
        <AppShell header={{ height: 60 }} padding="md">
            <AppShell.Main style={{ backgroundColor: 'transparent', backdropFilter: 'blur(3px)' }}>
                <div className="about-container fade-in">
                    {/* Title Section */}
                    <Title order={1} className="about-title">
                        About Me
                    </Title>

                    <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }} className="section-divider"/>

                    <Grid gutter="xl" style={{ marginTop: '48px' }}>
                        {/* Left Side */}
                        <Grid.Col span={6}> {/* ✅ Increased the span to give more space */}
                            <Text className="about-text">
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
                            >
                                {slides}
                            </Carousel>
                        </Grid.Col>
                    </Grid>

                    {/* Personal Touch */}
                    <Text className="about-text" style={{ marginTop: 20 }}>
                        During my free time, I love to play volleyball at local gyms and meet new people.  
                        I played for the GT Men's Volleyball team for 2 years.  
                        I am also a very active member at my local church and love to spend my time serving the community.  
                        Feel free to connect with me on LinkedIn or send me an email if you'd like to chat about anything!  
                        I've always been open to new experiences and opportunities that enhance my life and career.
                    </Text>


                    {/* Divider */}
                    <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.08)', marginTop: '48px' }} className="section-divider"/>


                    {/* Experience Section */}
                    <Title order={2} className="section-title">
                        Experience
                    </Title>

                    {/* GTRI Experience */}
                    <Grid gutter="lg" style={{ marginTop: '32px' }}>
                        {/* Image on the left */}
                        <Grid.Col span={6}>
                            <Image 
                                src="https://source.unsplash.com/400x300/?technology,computer" 
                                alt="GTRI" 
                                radius="md"
                                className="experience-image"
                            />
                        </Grid.Col>
                        {/* Description on the right */}
                        <Grid.Col span={6}>
                            <Text className="experience-title">Georgia Tech Research Institute</Text>
                            <Text className="experience-subtitle">Embedded Software Intern, May 2024 - December 2024</Text>
                            <Text className="about-text">
                                • Contributed to software development within an Agile/Sprint team on an embedded systems project for the Naval Air Warfare Center Aircraft Division.  <br />
                                • Developed a full-stack data application for electronic warfare using React.js and REST API Integrations, improving responsiveness by 25%.  <br />
                                • Developed and executed 100+ unit test cases, resolving critical software issues and decreasing bug count by 20%.  <br />
                                • Contributed to over 30 code reviews, improving code maintainability and reducing technical debt.  <br />
                            </Text>
                        </Grid.Col>
                    </Grid>

                    <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.08)', marginTop: '32px' }} className="section-divider" />

                    {/* Honeywell Experience */}
                    <Grid gutter="lg" style={{ marginTop: '32px' }}>
                        {/* Description on the left */}
                        <Grid.Col span={6}>
                            <Text className="experience-title">Honeywell International</Text>
                            <Text className="experience-subtitle">Software Product Intern, May 2023 - December 2023</Text>
                            <Text className="about-text">
                                • Spearheaded Agile sprint initiatives, documenting 50+ software QA processes and improving building software performance by 20%.  <br />
                                • Performed data-driven analysis on internal data structures, leading to optimization strategies aligned with project goals.  <br />
                                • Translated complex customer feedback into 30+ technical requirements, driving product improvements.  <br />
                                • Successfully secured $10M in funding for a high-impact project by presenting to senior executives and vice presidents.  <br />
                            </Text>
                        </Grid.Col>
                        {/* Image on the right */}
                        <Grid.Col span={6}>
                            <Image 
                                src="https://source.unsplash.com/400x300/?building,city" 
                                alt="Honeywell" 
                                radius="md"
                                className="experience-image"
                            />
                        </Grid.Col>
                    </Grid>

                    {/* Divider */}
                    <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.08)', marginTop: '48px' }} className="section-divider"/>

                    {/* Education Section */}
                    <Title order={2} className="section-title">
                        Education
                    </Title>

                    <Text className="experience-title">Georgia Institute of Technology</Text>
                    <Text className="experience-subtitle">Bachelor's in Computer Engineering, Devices & Distributed Systems and Software Design</Text>
                    <Text className="about-text">College of Engineering, Electrical and Computer Engineering</Text>

                    <Text className="experience-title">Lambert High School</Text>
                    <Text className="about-text">Suwanee, GA</Text>

                    {/* CTA Buttons */}
                    <div className="link-container">
                        <a href="/projects" className="button">
                            View My Projects
                        </a>
                        <a href="/contact" className="secondary-button">
                            Connect With Me
                        </a>
                    </div>
                </div>
            </AppShell.Main>
        </AppShell>
    );
};

export default About;
