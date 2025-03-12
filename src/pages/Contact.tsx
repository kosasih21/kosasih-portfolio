const Contact = () => {
    return (
        <div className="container">
            <h2>Let's Connect 👇</h2>
            <p>
                Feel free to reach out to me through any of the platforms below:
            </p>
            <div className="link-container">
                <a 
                    href="https://github.com/kosasih21" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link"
                >
                    GitHub
                </a>
                <a 
                    href="https://www.linkedin.com/in/vincentius-kosasih" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link"
                >
                    LinkedIn
                </a>
                <a 
                    href="mailto:vincentius.kosasih@example.com" 
                    className="link"
                >
                    Email
                </a>
            </div>
        </div>
    );
};

export default Contact;
