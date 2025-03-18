import { AppShell, Card, Text, Button, Group, Badge } from '@mantine/core';

const projects = [
    {
        id: 1,
        title: 'Mini Self-Driving Car',
        description: 'An autonomous car using sensors and motors with obstacle avoidance and real-time control.',
        link: '/projects/self-driving-car',
        image: '/assets/selfdriving.png',
        tags: ['Embedded Systems', 'Sensors', '3D Printing', 'C++', 'Arduino'],
    },
    {
        id: 2,
        title: 'Photo Gallery (AWS)',
        description: 'A cloud-hosted photo gallery app with DynamoDB and user authentication.',
        link: '/projects/photo-gallery',
        image: '/assets/cloud.png',
        tags: ['DynamoDB', 'React', 'Python' , 'MySQL', 'User Authentication'],
    },
    {
        id: 3,
        title: 'Portfolio Website',
        description: 'A personal website built with React, Mantine, and TypeScript.',
        link: '/projects/portfolio',
        image: '/assets/website.png',
        tags: ['React', 'Mantine', 'TypeScript', 'Web Development', 'Frontend'],
    },
    {
        id: 4,
        title: 'FPGA High-Frequency Trading',
        description: 'A performance benchmark comparing batch processing vs. streaming data on FPGA and C++.',
        link: '/projects/fpga-hft',
        image: '/assets/trading.png',
        tags: ['FPGA', 'VHDL', 'C++', 'Latency', 'High-Frequency Trading', 'Finance'],
    },
    {
        id: 5,
        title: 'Archery Arrow Detection System',
        description: 'A sensor-based system that detects and scores arrow placement using VL53L0X sensors.',
        link: '/projects/arrow-detection',
        image: '/assets/archery.png',
        tags: ['Embedded Systems', 'Sensors', 'Python', 'Hardware', 'Arduino'],
    },
    {
        id: 6,
        title: 'The Secret Legends of Burdell',
        description: 'A text-based adventure game with multiple endings and choices.',
        link: '/projects/game',
        image: '/assets/game.png',
        tags: ['C++', 'Algorithms', 'Hardware', 'Embedded Systems', 'Game Dev'],
    }
];

const Projects = () => {
    return (
        <AppShell header={{ height: 60 }} padding="md">
            <AppShell.Main
                style={{
                    width: '100%',
                    maxWidth: '100vw',
                    flexGrow: 1,
                    overflowX: 'visible',
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(3px)',
                }}
            >
                <div className="project-container fade-in">
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
                                    target="_self" // ✅ Open in same tab
                                    fullWidth
                                    mt="auto"
                                    radius="md"
                                    color="#19542e"
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
