const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Self-Driving Car',
            description: 'An autonomous car using sensors and motors with obstacle avoidance and real-time control.',
            link: 'https://github.com/your-github/self-driving-car',
        },
        {
            id: 2,
            title: 'Archery Arrow Detection System',
            description: 'A sensor-based system that detects and scores arrow placement using VL53L0X sensors.',
            link: 'https://github.com/your-github/arrow-detection',
        }
    ];

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.heading}>My Projects 🚀</h1>
                <p style={styles.subheading}>
                    Here are some of the key projects I've worked on:
                </p>
                <div style={styles.projectList}>
                    {projects.map((project) => (
                        <div key={project.id} style={styles.projectCard}>
                            <h2 style={styles.projectTitle}>{project.title}</h2>
                            <p style={styles.projectDescription}>{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.button}
                            >
                                View Code
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '20px',
        backgroundColor: '#121212',
        color: '#E0E0E0',
    },
    content: {
        textAlign: 'center' as const,
        maxWidth: '800px',
        width: '100%',
    },
    heading: {
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '12px',
        color: '#FFFFFF',
    },
    subheading: {
        fontSize: '1.2rem',
        fontWeight: '400',
        lineHeight: '1.6',
        marginBottom: '24px',
        color: '#B0B0B0',
    },
    projectList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        marginTop: '20px',
    },
    projectCard: {
        backgroundColor: '#1E1E1E',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        textAlign: 'left' as const,
    },
    projectTitle: {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: '8px',
    },
    projectDescription: {
        fontSize: '1rem',
        fontWeight: '400',
        color: '#B0B0B0',
        marginBottom: '16px',
        lineHeight: '1.5',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#1DB954', // Spotify Green
        color: '#121212',
        fontSize: '16px',
        fontWeight: '600',
        borderRadius: '8px',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'background-color 0.3s ease',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(29, 185, 84, 0.3)',
    },
};

export default Projects;
