import { AppShell, Button, CopyButton, Tooltip} from '@mantine/core';
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
                        {/* <Button
                            component="a"
                            href="mailto:kosasih21103@gmail.com"
                            leftSection={<Mail size={18} />}
                            className="connect-button"
                        >
                            Email
                        </Button> */}
                        <CopyButton value="kosasih21103@gmail.com" timeout={2000}>
                            {({ copied, copy }) => (
                                <Tooltip
                                    label={copied ? "Copied!" : "Click to copy email"}
                                    withArrow
                                    position="right"
                                >
                                    <Button
                                        onClick={copy}
                                        leftSection={<Mail size={18} />}
                                        className="connect-button"
                                    >
                                        Email
                                    </Button>
                                </Tooltip>
                            )}
                        </CopyButton>
                    </div>
                </div>
            </AppShell.Main>
        </AppShell>
    );
};

export default Contact;
