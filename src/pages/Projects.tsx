
import { AppShell, Card, Text, Button, Group, Badge } from '@mantine/core';
import Header from '../components/Header';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Self-Driving Car',
            description: 'An autonomous car using sensors and motors with obstacle avoidance and real-time control.',
            link: 'https://github.com/your-github/self-driving-car',
            image: '/assets/selfdriving.png',
            tags: ['Embedded Systems', 'Sensors', '3D Printing', 'C++'],
        },
        {
            id: 2,
            title: 'Photo Gallery (AWS)',
            description: 'A cloud-hosted photo gallery app with DynamoDB and user authentication.',
            link: 'https://github.com/your-github/photo-gallery',
            image: '/assets/cloud.png',
            tags: ['AWS', 'DynamoDB', 'React', 'MySQL', 'User Authentication'],
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description: 'A personal website built with React, Mantine, and TypeScript.',
            link: 'https://github.com/kosasih21/kosasih-portfolio',
            image: '/assets/website.png',
            tags: ['React', 'Mantine', 'TypeScript', 'Web Development'],
        },
        {
            id: 4,
            title: 'FPGA High-Frequency Trading',
            description: 'A performance benchmark comparing batch processing vs. streaming data on FPGA and C++.',
            link: 'https://github.com/your-github/fpga-hft',
            image: '/assets/trading.png',
            tags: ['FPGA', 'VHDL', 'C++', 'HF Trading', 'Latency'],
        },
        {
            id: 5,
            title: 'Archery Arrow Detection System',
            description: 'A sensor-based system that detects and scores arrow placement using VL53L0X sensors.',
            link: 'https://github.com/your-github/arrow-detection',
            image: '/assets/archery.png',
            tags: ['Embedded Systems', 'Sensors', 'Python', 'Hardware'],
        },
        {
            id: 6,
            title: 'The Secret Legends of Burdell',
            description: 'A text-based adventure game with multiple endings and choices.',
            link: 'https://github.com/your-github/arrow-detection',
            image: '/assets/game.png',
            tags: ['C++', 'Algorithms', 'Hardware', 'Embedded Systems', 'Game Dev'],
        }
    ];

    return (
        <AppShell header={{ height: 60 }} padding="md">
            <Header />
            <AppShell.Main
                style={{
                    width: '100%',
                    maxWidth: '100vw',
                    flexGrow: 1,
                    overflowX: 'visible',
                }}
            >
                <div className="container">
                    <h1>My Projects 🚀</h1>
                    <p className="subheading">
                        Here are some of the key projects I've worked on:
                    </p>
                    <div className="project-list">
                        {projects.map((project) => (
                            <Card
                                key={project.id}
                                shadow="sm"
                                padding="lg"
                                radius="md"
                                withBorder
                                className="project-card"
                            >
                                <Card.Section>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                'https://via.placeholder.com/400x300?text=Project+Image';
                                        }}
                                    />
                                </Card.Section>

                                <Group mt="md" mb="xs" style={{ alignItems: 'flex-start' }}>
                                    <Text fw={600} className="project-title">
                                        {project.title}
                                    </Text>
                                </Group>

                                {/* Skill tags */}
                                <Group className="project-tags" mt="xs">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} className="tag">
                                            {tag}
                                        </Badge>
                                    ))}
                                </Group>

                                <Text size="sm" c="dimmed" className="project-description">
                                    {project.description}
                                </Text>

                                {/* Project button */}
                                <Button
                                    component="a"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fullWidth
                                    mt="auto"
                                    radius="md"
                                    color="blue"
                                    className="project-button"
                                >
                                    View Page
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </AppShell.Main>
        </AppShell>
    );
};

export default Projects;
