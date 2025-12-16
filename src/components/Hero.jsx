import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Briefcase, FileText, Home, User, Code, FolderOpen, Award, Mail } from 'lucide-react';
import Particles from './Particles';
import heroProfile from '../assets/hero-profile.png';

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="section"
            style={{
                background: 'var(--gradient-hero)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            {/* Floating Particles Background */}
            <Particles />

            {/* Vertical Navigation Sidebar */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -10, 0]
                }}
                transition={{
                    delay: 0.5,
                    duration: 0.8,
                    y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                style={{
                    position: 'fixed',
                    left: '2rem',
                    top: '20%',
                    transform: 'translateY(-50%)',
                    zIndex: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}
                className="vertical-nav"
            >
                {[
                    { icon: <Home size={28} />, id: 'home', label: 'Home' },
                    { icon: <User size={28} />, id: 'about', label: 'About' },
                    { icon: <Code size={28} />, id: 'skills', label: 'Skills' },
                    { icon: <FolderOpen size={28} />, id: 'projects', label: 'Projects' },
                    { icon: <Award size={28} />, id: 'awards', label: 'Awards' },
                    { icon: <Mail size={28} />, id: 'contact', label: 'Contact' }
                ].map((item, index) => (
                    <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.2, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => scrollToSection(item.id)}
                        style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '14px',
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            position: 'relative'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--accent-blue)';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.borderColor = 'var(--accent-blue)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--bg-secondary)';
                            e.currentTarget.style.color = 'var(--text-muted)';
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                        }}
                        title={item.label}
                    >
                        {item.icon}
                    </motion.button>
                ))}
            </motion.div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '3rem',
                    alignItems: 'center'
                }}>
                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ order: 1 }}
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                y: [0, -8, 0]
                            }}
                            transition={{
                                delay: 0.2,
                                y: {
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            style={{
                                color: 'var(--accent-light-blue)',
                                fontSize: '1.1rem',
                                marginBottom: '1rem',
                                fontWeight: 300
                            }}
                        >
                            Hello, I'm
                        </motion.p>

                        {/* Animated Name - Letter by Letter */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                type: "spring",
                                stiffness: 100
                            }}
                            style={{
                                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                                fontWeight: 700,
                                marginBottom: '1rem',
                                lineHeight: 1.2,
                                perspective: '1000px'
                            }}
                        >
                            {['V', 'a', 'i', 's', 'h', 'n', 'a', 'v', 'i'].map((letter, index) => (
                                <motion.span
                                    key={index}
                                    className="gradient-text"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.3 + index * 0.05,
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 120
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: [0, -10, 10, -10, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                    style={{
                                        display: 'inline-block',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.h1>

                        {/* Role with Emojis */}
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: [0, -10, 0]
                            }}
                            transition={{
                                delay: 0.8,
                                type: "spring",
                                y: {
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            style={{
                                fontSize: 'clamp(1.3rem, 3.5vw, 2.2rem)',
                                fontWeight: 600,
                                marginBottom: '1.5rem',
                                color: 'var(--text-secondary)'
                            }}
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    y: [0, -5, 0]
                                }}
                                transition={{
                                    delay: 1,
                                    y: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                style={{ display: 'inline-block' }}
                            >
                                🎓
                            </motion.span>
                            {' Computer Science and Engineering Student '}
                            <motion.span
                                animate={{
                                    rotate: [0, 14, -8, 14, -4, 10, 0],
                                    scale: [1, 1.2, 1.2, 1.2, 1.2, 1.2, 1],
                                    y: [0, -8, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 3,
                                    y: {
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                style={{ display: 'inline-block' }}
                            >
                                ✨
                            </motion.span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: [0, -12, 0]
                            }}
                            transition={{
                                delay: 0.9,
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            style={{
                                fontSize: '1.1rem',
                                color: 'var(--text-muted)',
                                maxWidth: '600px',
                                marginBottom: '2rem',
                                lineHeight: 1.8
                            }}
                        >
                            Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
                            Passionate about clean code and elegant design.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: [0, -10, 0]
                            }}
                            transition={{
                                delay: 1,
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}
                        >
                            <motion.button
                                animate={{
                                    y: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary"
                                onClick={() => scrollToSection('projects')}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <motion.div
                                    animate={{
                                        rotate: [0, 10, -10, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Briefcase size={20} />
                                </motion.div>
                                View My Work
                            </motion.button>
                            <motion.a
                                animate={{
                                    y: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 2.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.3
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/resume.jpg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                style={{
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <motion.div
                                    animate={{
                                        rotate: [0, -10, 10, 0]
                                    }}
                                    transition={{
                                        duration: 2.2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <FileText size={20} />
                                </motion.div>
                                Resume
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                y: [0, -8, 0]
                            }}
                            transition={{
                                delay: 1.1,
                                y: {
                                    duration: 3.2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            style={{ display: 'flex', gap: '1.5rem' }}
                        >
                            <motion.a
                                animate={{
                                    y: [0, -6, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0
                                }}
                                href="https://github.com/Vaishnavicode47"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'var(--text-muted)',
                                    transition: 'color 0.3s',
                                    display: 'inline-block'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-blue)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                            >
                                <Github size={24} />
                            </motion.a>
                            <motion.a
                                animate={{
                                    y: [0, -6, 0]
                                }}
                                transition={{
                                    duration: 2.3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.2
                                }}
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'var(--text-muted)',
                                    transition: 'color 0.3s',
                                    display: 'inline-block'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-blue)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                            >
                                <Linkedin size={24} />
                            </motion.a>
                            <motion.a
                                animate={{
                                    y: [0, -6, 0]
                                }}
                                transition={{
                                    duration: 2.6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.4
                                }}
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'var(--text-muted)',
                                    transition: 'color 0.3s',
                                    display: 'inline-block'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-blue)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                            >
                                <Twitter size={24} />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Portrait Image with Enhanced Animations */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            y: [0, -20, 0]
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.4,
                            type: "spring",
                            stiffness: 80,
                            y: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        style={{
                            order: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'relative'
                        }}
                    >
                        <div style={{ position: 'relative', maxWidth: '300px' }}>
                            {/* Animated Gradient Background Blob */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 90, 180, 270, 360],
                                    y: [0, -10, 0]
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                    y: {
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '100%',
                                    height: '100%',
                                    background: 'var(--gradient-accent)',
                                    borderRadius: '50%',
                                    filter: 'blur(60px)',
                                    opacity: 0.3,
                                    zIndex: 0
                                }}
                            />

                            {/* Portrait Image with Pulsing Glow */}
                            <motion.img
                                src={heroProfile}
                                alt="Portrait"
                                animate={{
                                    boxShadow: [
                                        'var(--card-shadow-hover)',
                                        '0 0 30px rgba(59, 130, 246, 0.3)',
                                        'var(--card-shadow-hover)'
                                    ],
                                    y: [0, -15, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    y: {
                                        duration: 4.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '20px',
                                    border: '3px solid var(--glass-border)',
                                    zIndex: 1
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    cursor: 'pointer',
                    zIndex: 2
                }}
                onClick={() => scrollToSection('about')}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ArrowDown size={32} style={{ color: 'var(--accent-blue)' }} />
                </motion.div>
            </motion.div>

            {/* Responsive Layout */}
            <style>{`
                @media (min-width: 768px) {
                    .container > div {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    .container > div > div:first-child {
                        order: 1 !important;
                    }
                    .container > div > div:last-child {
                        order: 2 !important;
                    }
                }
                @media (max-width: 768px) {
                    .vertical-nav {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
