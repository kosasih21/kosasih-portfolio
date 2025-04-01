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

const PhotoGallery = () => {
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
                    <h1>Photo Gallery</h1>
                    <p className="subheading">
                        Contributors: Vincentius Kosasih
                    </p>

                    <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.08)', marginTop: '32px' }} className="section-divider" />

                    <Grid gutter="xl" style={{ marginTop: '32px' }}>
                        {/* Left Side */}
                        <Grid.Col span={6}>
                            <h2 className="fade-in-view">Project Overview</h2>
                            <Text className="about-text fade-in-view">
                                A full-stack photo gallery web app with both SQL (MySQL RDS) and NoSQL (DynamoDB) implementations. 
                                Users can register, verify emails via AWS SES, and manage photo albums with metadata-rich uploads stored on S3. 
                                Built to compare relational vs. non-relational design while showcasing scalable CRUD operations, AWS integration, and authentication flows.
                            </Text>

                            <div className="fade-in-view" style={{ marginTop: '20px' }}>
                                <a 
                                    href="https://github.com/kosasih21/PhotoGalleryHW2" 
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
                            <Image 
                                src="../../assets/galleryDemo.png" 
                                alt="Architecture" 
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


                    <h2 className="fade-in-view" style={{ marginTop: 55, marginBottom: 5 }}>Technical Details</h2>
                    <p className="fade-in-view">Key Skills: Flask, SQL, DynamoDB, AWS (S3, SES), JWT, Bcrypt, HTML/CSS, EXIF Parsing</p>
                    <p className="fade-in-view">
                    • Built a full-stack photo gallery web app using Flask with both SQL (MySQL RDS) and NoSQL (DynamoDB) backends to explore architectural trade-offs.  <br />
                    • Implemented user authentication with secure JWT-based sessions, email confirmation via AWS SES, and password hashing with Bcrypt.  <br />
                    • Integrated AWS S3 for image storage with public-read access and dynamic URL generation for display in albums and photo pages.  <br />
                    • Created features such as album creation, photo upload with EXIF metadata extraction, and detailed photo views using server-side rendering.  <br />
                    • Developed search capabilities on both album and photo levels, supporting queries over titles, descriptions, tags, and EXIF metadata.
                    </p>

                    <h2 className="fade-in-view" style={{ marginTop: 20, marginBottom: 5 }}>Challenges and Insights</h2>
                    <p className="fade-in-view">Stateful Logic, Cloud Resource Coordination, and Data Modeling Across SQL/NoSQL</p>
                    <p className="fade-in-view">
                    • Managing user verification and login persistence across both storage architectures required a secure and flexible JWT strategy with cookie handling.  <br />
                    • AWS SES integration posed challenges due to sandboxing, forcing precise domain verification and error handling in the early stages of development.  <br />
                    • In the NoSQL version, designing a DynamoDB schema for albums and photos using composite keys (`albumID` + `photoID`) provided performance and scalability, but demanded careful handling of relational data patterns like joins.  <br />
                    • Ensured EXIF metadata extraction was consistent and lightweight, avoiding unnecessary overhead while maintaining valuable image context for search and filtering.  <br />
                    • Refined UI flow and error recovery logic to make file uploads, album/photo deletions, and account management feel smooth and reliable under all edge cases.
                    </p>

                    <h2 className="fade-in-view" style={{ marginTop: 20, marginBottom: 5 }}>Potential Extensions</h2>
                    <p className="fade-in-view">
                    • I would implement real-time updates via WebSockets or server-sent events to reflect album/photo changes instantly without page reloads.  <br />
                    • I'd add a robust image editor or cropping tool for users to enhance their photos before upload.  <br />
                    • I would also refactor the frontend into a React-based client with a REST or GraphQL API to allow mobile or desktop clients to integrate easily.  <br />
                    • Lastly, I'd introduce tiered user roles with admin moderation capabilities, audit logging, and analytics to better understand user behavior and usage trends.  
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

export default PhotoGallery;
