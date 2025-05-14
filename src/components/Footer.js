import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'lavender', padding: '10px', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Skincare ML Website. All rights reserved.</p>
            <p>
                <a href="#about" style={{ margin: '0 10px' }}>About</a>
                <a href="#contact" style={{ margin: '0 10px' }}>Contact</a>
                <a href="#privacy" style={{ margin: '0 10px' }}>Privacy Policy</a>
            </p>
        </footer>
    );
};

export default Footer;