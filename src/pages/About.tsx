import { AppShell, Blockquote } from '@mantine/core';

const About = () => {
    return (
        <AppShell header={{ height: 60 }} padding="md">
            <AppShell.Main style={{ 
                backgroundColor: 'transparent',
                backdropFilter: 'blur(3px)',
            }}>
                <div className="about-container fade-in">

                    {/* Left Block */}
                    <h1>About Me</h1>
                    <p>
                        Hi! I'm Vincentius Kosasih, a passionate software developer with experience in embedded systems, product, and full stack development.
                        I'm currently a graduating senior at Georgia Tech, where I study Computer Engineering. I envision working in a high performing, 
                        fast-paced environment where I will learn and provide technical expertise integrating hardware with software. Check out my 
                        experience and education below, or visit my projects page to see what I work on as a passion.
                    </p>

                    <Blockquote color="green" cite="– Master Oogway">
                        "Yesterday is history, tomorrow is a mystery,
                        but today is a gift,
                        that is why it is called the present."
                    </Blockquote>

                    <p>
                        During my free time, I love to play volleyball at local gyms and meet new people. I played for the GT Mens Volleyball team for 2 years.
                        Check out the pictures from my time at Georgia Tech! I am also a very active member at my local church and love to spend my time serving
                        the community. Feel free to connect with me on LinkedIn or send me an email if you'd like to chat about anything! I've always been open to new
                        experiences and opportunities that enhance my life and career.
                    </p>

                    {/* Right Block is a image slideshow */}


                    <h2>Experience</h2>
                    <h3>Georgia Tech Research Institute</h3>
                    <p>Embedded Software Engineering Intern, May 2024 - December 2024</p>
                    <p>
                        •	Contributed significantly to software development within an Agile/Sprint team on an embedded systems project for the Naval Air Warfare 
                            Center Aircraft Division, participating in over 50 sprint meetings and streamlining task coordination.
                        •	Played a key role in developing a full stack data application for electronic warfare, working on the front-end with React.js and the 
                            back end with REST API Integrations, leading to a 25% increase in responsiveness and performance improvements.
                        •	Developed and executed 100+ unit test cases to ensure project functionality, reliability, and security, which resulted in identifying 
                            and resolving critical software issues early, decreasing overall bug count and test coverage by over 20%.
                        •	Engaged in all phases of development, from planning and design to implementation and review, contributing to over 30 code reviews 
                            and suggesting improvements that enhanced code maintainability and decreased overall technical debt.
                    </p>

                    <h3>Honeywell International</h3>
                    <p>Software Product Intern, May 2023 - December 2023</p>
                    <p>
                        •	Spearheaded Agile sprint initiatives, documenting over 50 software QA processes and iterating test scenarios, leading to the 
                        identification and resolution of key software points, improving building management software performance by 20%.
                        • 	Performed data-driven analysis on building management software benchmarks, isolating critical performance bottlenecks within internal 
                        data structures and algorithms and formulating optimization strategies according to project roadmaps.
                        • 	Analyzed complex customer feedback on product performance and product lifecycle, transforming it into 30+ precise technical requirements 
                        that guided strategic product improvements, leading to a project revival.
                        • 	Garnered strong support from senior executives and vice presidents by presenting a compelling case for a high-impact project initiative, 
                        successfully securing over $10 million in funding and strategic backing to drive the project's success.
                    </p>



                    <h2>Education</h2>
                    <h3>Georgia Institute of Technology</h3>
                    <p>Bachelor's in Computer Engineering, Devices & Distributed Systems and Software Design</p>
                    <p>College of Engineering, Electrical and Computer Engineering</p>

                    <h3>Lambert High School</h3>
                    <p>Suwanee, GA</p>



                    <div className="link-container">
                        <a href="/projects" className="button">
                            View My Projects
                        </a>
                        <a href="/contact" className="secondary-button">
                            Connect With Me
                        </a>
                    </div>
                </div>
            </AppShell.Main>
        </AppShell>
    );
};

export default About;
