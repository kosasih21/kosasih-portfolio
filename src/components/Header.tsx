import { AppShell, Button } from '@mantine/core';

const Header = () => {
    return (
        <AppShell.Header style={{ borderBottom: '1px solid #333333' }}>
            <div className="header">
                <div className="header-buttons">
                    <Button
                        variant="subtle"
                        component="a"
                        href="/"
                        className="nav-button"
                        style={{ color: '#1DB954' }}
                    >
                        Home
                    </Button>
                    <Button
                        variant="subtle"
                        component="a"
                        href="/about"
                        className="nav-button"
                        style={{ color: '#1DB954' }}
                    >
                        About
                    </Button>
                    <Button
                        variant="subtle"
                        component="a"
                        href="/projects"
                        className="nav-button"
                        style={{ color: '#1DB954' }}
                    >
                        Projects
                    </Button>
                    <Button
                        variant="subtle"
                        component="a"
                        href="/contact"
                        className="nav-button"
                        style={{ color: '#1DB954' }}
                    >
                        Contact
                    </Button>
                </div>
            </div>
        </AppShell.Header>
    );
};

export default Header;
