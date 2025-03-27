import { useEffect } from 'react';
import { AppShell, Grid, Text, Image, Divider } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { initScrollAnimation } from '../../utils/scrollAnimation';


const images = [
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

const Portfolio = () => {
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} className="carousel-image" />
        </Carousel.Slide>
    ));

    useEffect(() => {
        initScrollAnimation();
    }, []);

    return (
        <AppShell header={{ height: 60 }} padding="md">
            <AppShell.Main style={{ 
                backgroundColor: 'transparent',
                backdropFilter: 'blur(3px)',
            }}>
                <div className="projects-container fade-in">
                    <h1>Portfolio</h1>
                    <p className="subheading">
                        Contributors: Vincentius Kosasih
                    </p>

                    <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.08)', marginTop: '32px' }} className="section-divider" />

                    <Grid gutter="xl" style={{ marginTop: '32px' }}>
                        {/* Left Side */}
                        <Grid.Col span={6}>
                            <h2 className="fade-in-view">Project Overview</h2>
                            <Text className="about-text fade-in-view">
                                A responsive personal portfolio built using React, TypeScript, Vite, and Mantine UI.  
                                This project showcases projects, experiences, and contact info with a modern dark-themed layout and smooth scroll animations.  
                                It's deployed via Cloudflare Pages and custom domain routing, featuring modular components and clean code structure for easy future updates.
                            </Text>

                            <div className="fade-in-view" style={{ marginTop: '20px' }}>
                                <a 
                                    href="https://github.com/kosasih21/kosasih-portfolio" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="secondary-button"
                                >
                                    View Code
                                </a>
                            </div>
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
                                className="fade-in-view"
                            >
                                {slides}
                            </Carousel>
                        </Grid.Col>
                    </Grid>


                    <h2 className="fade-in-view" style={{ marginTop: 55, marginBottom: 5 }}>Technical Details</h2>
                    <p className="fade-in-view">Key Skills: React.js, TypeScript, Mantine UI, CSS Animations, Responsive Design, GitHub Pages</p>
                    <p className="fade-in-view">
                    • Designed and developed a sleek, responsive portfolio website using React with TypeScript and Mantine’s AppShell for layout and theming.  
                    • Implemented a consistent dark theme across pages, with shared header navigation, project carousels, animated transitions, and modern grid layouts.  
                    • Integrated scroll-based and in-view animations using `IntersectionObserver` and custom CSS to enhance interactivity and showcase smooth page transitions.  
                    • Deployed using GitHub Pages with a lightweight, statically hosted setup to ensure fast performance and low maintenance.  
                    • Organized project pages with reusable sections (hero, overview, technical details, challenges, etc.), optimized for readability and storytelling.  
                    </p>

                    <h2 className="fade-in-view" style={{ marginTop: 20, marginBottom: 5 }}>Challenges and Insights</h2>
                    <p className="fade-in-view">Scroll Animations, Theming Consistency, and Dynamic Layout Scaling</p>
                    <p className="fade-in-view">
                    • One challenge was getting animations to trigger only when elements entered the viewport—solved using a clean `IntersectionObserver`-based approach for `fade-in-view` class elements.  
                    • Balancing responsive layout with full-bleed design elements and custom breakpoints required iterative tuning using Mantine’s Grid and native CSS units.  
                    • Ensured styling consistency across the app by centralizing theme colors, font sizes, spacing, and animation durations in global CSS and keeping logic out of component files.  
                    • Handling z-index layers and backdrop blur effects across `AppShell` and content layers taught key lessons in how layered UI rendering behaves in Mantine.  
                    </p>

                    <h2 className="fade-in-view" style={{ marginTop: 20, marginBottom: 5 }}>Potential Extensions</h2>
                    <p className="fade-in-view">
                    • I would add a lightweight content management system (CMS) or a markdown-powered backend to let me update projects without touching code.  
                    • I’d also introduce a contact form backed by an API or serverless function (e.g., AWS Lambda or Formspree) for handling secure user submissions.  
                    • Animating page transitions with Framer Motion and adding filtering/search capabilities to the projects section would enhance interactivity.  
                    • Lastly, I'd optimize accessibility (ARIA, keyboard nav, contrast) and SEO (structured data, meta tags) to make the site more discoverable and inclusive.  
                    </p>

                    <div className="link-container fade-in-view">
                        <a href="/contact" className="secondary-button">
                             Learn More
                        </a>
                    </div>
                </div>
            </AppShell.Main>
        </AppShell>
    );
};

export default Portfolio;
