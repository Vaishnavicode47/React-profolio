import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Frontend',
        skills: ['HTML 🌐', 'CSS 🎨', 'JavaScript ⚡', 'React.js ⚛️'],
        color: 'var(--accent-blue)'
    },
    {
        title: 'Backend',
        skills: ['Java ☕', 'Python 🐍', 'Node.js 🟢'],
        color: 'var(--accent-light-blue)'
    },
    {
        title: 'Database',
        skills: ['MySQL 🐬', 'MongoDB 🍃'],
        color: 'var(--accent-blue)'
    },
    {
        title: 'Tools',
        skills: ['Git 🔧', 'GitHub 🐙', 'VS Code 📝', 'Figma 🎨'],
        color: 'var(--accent-light-blue)'
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        <span className="gradient-text">Skills</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.5rem' }}>
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            animate={{
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                y: {
                                    duration: 3 + index * 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            whileHover={{ y: -5 }}
                            className="card"
                            style={{
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--glass-border)',
                                padding: '2rem'
                            }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                                background: 'var(--gradient-accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                fontSize: '1.5rem'
                            }}>
                                {category.title === 'Frontend' && '💻'}
                                {category.title === 'Backend' && '⚙️'}
                                {category.title === 'Database' && '🗄️'}
                                {category.title === 'Tools' && '🛠️'}
                            </div>

                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                marginBottom: '1rem',
                                color: 'var(--text-primary)'
                            }}>
                                {category.title}
                            </h3>

                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {category.skills.map((skill, skillIndex) => (
                                    <li
                                        key={skillIndex}
                                        style={{
                                            padding: '0.5rem 0',
                                            color: 'var(--text-muted)',
                                            fontSize: '1rem',
                                            borderBottom: skillIndex < category.skills.length - 1
                                                ? '1px solid var(--glass-border)'
                                                : 'none'
                                        }}
                                    >
                                        • {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
