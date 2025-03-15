import { Menu, Button } from '@mantine/core';

const ProjectDropdown = () => {
    return (
        <Menu
            shadow="md"
            width={200}
            trigger="hover"
            openDelay={100}
            closeDelay={200}
            styles={{
                dropdown: {
                    backgroundColor: '#121212',
                    border: '1px solid #125429',
                    padding: '8px',
                    borderRadius: '8px',
                },
                item: {
                    color: '#E0E0E0',
                },
                label: {
                    color: '#1DB954',
                    fontWeight: 600,
                }
            }}
        >
            <a href="/projects" style={{ textDecoration: 'none' }}>
                <Menu.Target>
                    <Button 
                        variant="subtle" 
                        style={{
                            color: '#1DB954',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#1f271f';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#1DB954';
                        }}
                    >
                        Projects
                    </Button>
                </Menu.Target>
            </a>

            <Menu.Dropdown>
                <Menu.Label>My Projects</Menu.Label>
                <Menu.Item
                    component="a"
                    href="/projects/self-driving-car"
                    className="custom-menu-item"
                >
                    Mini Self-Driving Car
                </Menu.Item>
                <Menu.Item
                    component="a"
                    href="/projects/photo-gallery"
                    className="custom-menu-item"
                >
                    Photo Gallery (AWS)
                </Menu.Item>
                <Menu.Item
                    component="a"
                    href="/projects/portfolio"
                    className="custom-menu-item"
                >
                    Portfolio Website
                </Menu.Item>
                <Menu.Item
                    component="a"
                    href="/projects/fpga-hft"
                    className="custom-menu-item"
                >
                    FPGA High-Frequency Trading
                </Menu.Item>
                <Menu.Item
                    component="a"
                    href="/projects/arrow-detection"
                    className="custom-menu-item"
                >
                    Archery Arrow Detection System
                </Menu.Item>
                <Menu.Item
                    component="a"
                    href="/projects/game"
                    className="custom-menu-item"
                >
                    The Secret Legends of Burdell
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};

export default ProjectDropdown;
