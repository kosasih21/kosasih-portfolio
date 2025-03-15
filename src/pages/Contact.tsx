import { AppShell, Button } from '@mantine/core';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <AppShell header={{ height: 60 }} padding="md">
            <AppShell.Main style={{ 
                backgroundColor: 'transparent',
                backdropFilter: 'blur(3px)',
            }}>
                <div className="container fade-in">
                    <h2>Let's Connect 👇</h2>
                    <p>
                        Feel free to reach out to me through any of the platforms below:
                    </p>
                    <div className="link-container">
                        <Button
                            component="a"
                            href="https://github.com/kosasih21"
                            target="_blank"
                            rel="noopener noreferrer"
                            leftSection={<Github size={18} />}
                            className="connect-button"
                        >
                            GitHub
                        </Button>
                        <Button
                            component="a"
                            href="https://www.linkedin.com/in/vincentius-kosasih"
                            target="_blank"
                            rel="noopener noreferrer"
                            leftSection={<Linkedin size={18} />}
                            className="connect-button"
                        >
                            LinkedIn
                        </Button>
                        <Button
                            component="a"
                            href="mailto:vincentius.kosasih@example.com"
                            leftSection={<Mail size={18} />}
                            className="connect-button"
                        >
                            Email
                        </Button>
                    </div>
                </div>
            </AppShell.Main>
        </AppShell>
    );
};

export default Contact;
