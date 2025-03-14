import { AppShell, Button } from '@mantine/core';

const Header = () => {
    return (
        <AppShell.Header style={{ 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)', 
            backgroundColor: 'transparent',
            backdropFilter: 'blur(5px)', // Optional for a frosted glass effect
        }}>
            <div className="header">
                <div className="header-buttons">
                    <Button
                        variant="subtle"
                        component="a"
                        href="/"
                        className="nav-button"
                        style={{
                            color: '#1DB954',
                            '--button-hover': '#1f271f',
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        variant="subtle"
                        component="a"
                        href="/about"
                        className="nav-button"
                        style={{
                            color: '#1DB954',
                            '--button-hover': '#1f271f',
                        }}
                    >
                        About
                    </Button>
                    <Button
                        variant="subtle"
                        component="a"
                        href="/projects"
                        className="nav-button"
                        style={{
                            color: '#1DB954',
                            '--button-hover': '#1f271f',
                        }}
                    >
                        Projects
                    </Button>
                    <Button
                        variant="subtle"
                        component="a"
                        href="/contact"
                        className="nav-button"
                        style={{
                            color: '#1DB954',
                            '--button-hover': '#1f271f',
                        }}
                    >
                        Contact
                    </Button>
                </div>
            </div>
        </AppShell.Header>
    );
};

export default Header;
