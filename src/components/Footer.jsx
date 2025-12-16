import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const quickLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Awards', id: 'awards' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            borderTop: '1px solid var(--glass-border)',
            padding: '3rem 0 1.5rem'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginBottom: '2rem'
                }}>
                    {/* Brand */}
                    <div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            marginBottom: '1rem'
                        }}>
                            <span className="gradient-text">Portfolio</span>
                        </h3>
                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.95rem',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem'
                        }}>
                            Crafting beautiful web experiences with modern technologies and clean code.
                        </p>

                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a
                                href="https://github.com/Vaishnavicode47"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-primary)',
                                    border: '1px solid var(--glass-border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--text-muted)',
                                    transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--accent-blue)';
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.borderColor = 'var(--accent-blue)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'var(--bg-primary)';
                                    e.currentTarget.style.color = 'var(--text-muted)';
                                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                                }}
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-primary)',
                                    border: '1px solid var(--glass-border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--text-muted)',
                                    transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--accent-blue)';
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.borderColor = 'var(--accent-blue)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'var(--bg-primary)';
                                    e.currentTarget.style.color = 'var(--text-muted)';
                                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                                }}
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-primary)',
                                    border: '1px solid var(--glass-border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--text-muted)',
                                    transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--accent-blue)';
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.borderColor = 'var(--accent-blue)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'var(--bg-primary)';
                                    e.currentTarget.style.color = 'var(--text-muted)';
                                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                                }}
                            >
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            color: 'var(--text-primary)'
                        }}>
                            Quick Links
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: 'var(--text-muted)',
                                            fontSize: '0.95rem',
                                            cursor: 'pointer',
                                            padding: 0,
                                            transition: 'color 0.3s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-blue)'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            color: 'var(--text-primary)'
                        }}>
                            Get In Touch
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                📧 vaishuperiasamy0487@gmail.com
                            </li>
                            <li style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                📱 8248599480
                            </li>
                            <li style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                📍 India
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--glass-border)',
                    textAlign: 'center'
                }}>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        flexWrap: 'wrap'
                    }}>
                        © {new Date().getFullYear()} Portfolio. Made with
                        <Heart size={16} style={{ color: '#ef4444' }} fill="#ef4444" />
                        by Vaishnavi
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
