import { useEffect } from 'react';
import { AppShell, Image, Grid, Title, Text, Blockquote, Divider } from '@mantine/core';
import { initScrollAnimation } from '../utils/scrollAnimation';

const About = () => {
    useEffect(() => {
        initScrollAnimation();
    }, []);

    return (
        <AppShell header={{ height: 60 }} padding="md">
            <AppShell.Main style={{ backgroundColor: 'transparent', backdropFilter: 'blur(3px)' }}>
                <div className="about-container">
                    {/* Title Section */}
                    <Title order={1} className="about-title fade-in-view">
                        About Me
                    </Title>

                    <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }} className="section-divider"/>

                    <Grid gutter="xl" style={{ marginTop: '32px' }}>
                        {/* Left Side */}
                        <Grid.Col span={6}>
                            <Text className="about-text fade-in-view">
                                Hi! I'm Vincentius Kosasih, a passionate software developer with experience in embedded systems, product, and full stack development.  
                                I'm currently a graduating senior at Georgia Tech, where I study Computer Engineering.  
                                I envision working in a high-performing, fast-paced environment where I will learn and provide technical expertise  
                                integrating hardware with software.  
                                <br />
                                <br />
                                Check out my experience and education below, or visit my projects page to see what I work on as a passion.
                                <br />
                            </Text>
                            <Blockquote color="green" cite="- Master Oogway" style={{ marginTop: '30px' }} className="fade-in-view">
                                "Yesterday is history, tomorrow is a mystery, but today is a gift, that is why it is called the present."
                            </Blockquote>
                        </Grid.Col>

                        {/* Right Side - Single Image */}
                        <Grid.Col span={6}>
                            <Image 
                                src="../../assets/self.jpg" 
                                alt="Vincent in SF" 
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

                    {/* Personal Touch */}
                    <Text className="about-text fade-in-view" style={{ marginTop: 20 }}>
                        During my free time, I love to play volleyball at local gyms and meet new people.  
                        I played for the GT Men's Volleyball team for 2 years.  
                        I am also a very active member at my local church and love to spend my time serving the community.  
                        Feel free to connect with me on LinkedIn or send me an email if you'd like to chat about anything!  
                        I've always been open to new experiences and opportunities that enhance my life and career.
                    </Text>

                    {/* Divider */}
                    <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.08)', marginTop: '32px' }} className="section-divider" />

                    {/* Experience Section */}
                    <Title order={2} className="section-title fade-in-view">
                        Experience
                    </Title>

                    {/* GTRI Experience */}
                    <Grid gutter="lg" style={{ marginTop: '32px' }}>
                        {/* Image on the left */}
                        <Grid.Col span={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image 
                                src="../../assets/gtri.png" 
                                alt="GTRI" 
                                radius="md"
                                className="fade-in-view"
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    objectFit: 'cover',
                                }}
                            />
                        </Grid.Col>
                        {/* Description on the right */}
                        <Grid.Col span={6}>
                            <Text className="custom-title fade-in-view">Georgia Tech Research Institute</Text>
                            <Text className="custom-subtitle fade-in-view">Embedded Software Intern, May 2024 - December 2024</Text>
                            <Text className="about-text fade-in-view">
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
                            <Text className="custom-title fade-in-view">Honeywell International</Text>
                            <Text className="custom-subtitle fade-in-view">Software Product Intern, May 2023 - December 2023</Text>
                            <Text className="about-text fade-in-view">
                                • Spearheaded Agile sprint initiatives, documenting 50+ software QA processes and improving building software performance by 20%.  <br />
                                • Performed data-driven analysis on internal data structures, leading to optimization strategies aligned with project goals.  <br />
                                • Translated complex customer feedback into 30+ technical requirements, driving product improvements.  <br />
                                • Successfully secured $10M in funding for a high-impact project by presenting to senior executives and vice presidents.  <br />
                            </Text>
                        </Grid.Col>
                        {/* Image on the right */}
                        <Grid.Col span={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image 
                                src="../../assets/honeywell.png" 
                                alt="Honeywell" 
                                radius="md"
                                className="fade-in-view"
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    fit: 'contain',
                                }}
                            />
                        </Grid.Col>
                    </Grid>

                    {/* Divider */}
                    <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.08)', marginTop: '48px' }} className="section-divider"/>

                    {/* Education Section */}
                    <Title order={2} className="section-title fade-in-view">
                        Education
                    </Title>

                    <Text className="custom-title fade-in-view">Georgia Institute of Technology</Text>
                    <Text className="custom-subtitle fade-in-view">Bachelor's in Computer Engineering, Devices & Distributed Systems and Software Design</Text>
                    <Text className="about-text fade-in-view">College of Engineering, Electrical and Computer Engineering, Class of 2025</Text>

                    <Text className="custom-title fade-in-view">Lambert High School</Text>
                    <Text className="about-text fade-in-view">Suwanee, GA</Text>

                    {/* CTA Buttons */}
                    <div className="link-container">
                        <a href="/projects" className="button fade-in-view">
                            View My Projects
                        </a>
                        <a href="/contact" className="secondary-button fade-in-view">
                            Connect With Me
                        </a>
                    </div>
                </div>
            </AppShell.Main>
        </AppShell>
    );
};

export default About;
