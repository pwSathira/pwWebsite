import React, { useState } from 'react';
import backgroundImage from './assets/HomePage.jpg';
import pwIcon from './assets/pwSathira.png'
import githubIcon from './assets/github.png';
import linkedinIcon from './assets/linkedin.png';
import resumeIcon from './assets/resume.png';

const styles = {
    app: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        fontFamily: '"Arial", sans-serif',
        textAlign: 'center'
    },
    pwIcon: {
        width: '100px',
        height: '100px',
        animation: 'spin 2s linear infinite',
    },
    h1: { fontSize: '3em', marginBottom: '-20px' },
    h2: { fontSize: '2em', fontStyle: 'italic' },
    socialLinks: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '200px'
    },
    socialIcon: { width: '50px', height: '50px', filter: 'invert(1)' },
    contactButton: {
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#FFFFFF',
        color: '#000000',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    },
    emailDisplay: {
        position: 'absolute',
        bottom: '60px',
        right: '20px',
        backgroundColor: '#FFFFFF',
        color: '#000000',
        padding: '10px',
        borderRadius: '5px'
    }
};

const SocialLinks = () => (
    <div style={styles.socialLinks}>
        <a href="https://github.com/pwSathira" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" style={styles.socialIcon} />
        </a>
        <a href="https://www.linkedin.com/in/pwsathira/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" style={styles.socialIcon} />
        </a>
        <a href="https://drive.google.com/file/d/14QIc6EfxU-ntA19D_AWqOSaBWXKiS757/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img src={resumeIcon} alt="Resume" style={styles.socialIcon} />
        </a>
    </div>
);

const ContactButton = ({ onClick }) => (
    <button onClick={onClick} style={styles.contactButton}>
        Contact Me!
    </button>
);

const EmailDisplay = ({ show }) => (
    show && (
        <div style={styles.emailDisplay}>
            sathira.williams@gmail.com
        </div>
    )
);
function App() {
    const [showEmail, setShowEmail] = useState(false);

    return (
        <div className="App" style={styles.app}>
            <img src={pwIcon} alt="not found" style={styles.pwIcon} />
            <h1 style={styles.h1}>Sathira Williams</h1>
            <h2 style={styles.h2}>Software Engineering Student at YorkU</h2>
            <SocialLinks />
            <ContactButton onClick={() => setShowEmail(!showEmail)} />
            <EmailDisplay show={showEmail} />
        </div>
    );
}

export default App;
