import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
    const highlights = [
        { icon: <Code size={24} />, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
        { icon: <Palette size={24} />, title: 'Design Focus', description: 'Creating beautiful user interfaces' },
        { icon: <Zap size={24} />, title: 'Performance', description: 'Optimized and fast applications' }
    ];

    return (
        <section
            id="about"
            className="section"
            style={{
                background: 'var(--bg-primary)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(/workspace.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.05,
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '3rem',
                    alignItems: 'center'
                }}>
                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        animate={{
                            y: [0, -15, 0]
                        }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            order: 1
                        }}
                    >
                        <div style={{ position: 'relative', maxWidth: '500px', width: '100%' }}>
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '80%',
                                    height: '80%',
                                    background: 'var(--gradient-accent)',
                                    borderRadius: '20px',
                                    filter: 'blur(60px)',
                                    opacity: 0.2,
                                    zIndex: 0
                                }}
                            />

                            <img
                                src="/workspace.jpg"
                                alt="Workspace"
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '20px',
                                    boxShadow: 'var(--card-shadow-hover)',
                                    border: '2px solid var(--glass-border)',
                                    zIndex: 1
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Right Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{ order: 2 }}
                    >
                        <h3 style={{
                            fontSize: '2rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            color: 'var(--text-primary)'
                        }}>
                            Professional Background
                        </h3>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-muted)',
                            marginBottom: '1.5rem',
                            lineHeight: 1.8
                        }}>
                            Hi, I'm Vaishnavi, a passionate Frontend Developer based in India. I specialize in building
                            beautiful, responsive, and functional websites using modern web technologies like React,
                            JavaScript, and CSS.
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.8
                        }}>
                            With a strong foundation in web development and a keen eye for design, I strive to create
                            seamless user experiences. I love turning complex problems into simple, elegant solutions.
                        </p>

                        {/* Highlights */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1.5rem',
                            marginBottom: '2rem'
                        }}>
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    animate={{
                                        y: [0, -8, 0]
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        y: {
                                            duration: 3 + index,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    style={{
                                        padding: '1.5rem',
                                        background: 'var(--bg-secondary)',
                                        borderRadius: '12px',
                                        border: '1px solid var(--glass-border)'
                                    }}
                                >
                                    <div style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
                                        {item.icon}
                                    </div>
                                    <h4 style={{
                                        fontWeight: 600,
                                        marginBottom: '0.5rem',
                                        color: 'var(--text-primary)'
                                    }}>
                                        {item.title}
                                    </h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>


                    </motion.div>
                </div>
            </div>

            {/* Responsive Layout */}
            <style>{`
        @media (min-width: 768px) {
          .container > div {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
        </section>
    );
};

export default About;

