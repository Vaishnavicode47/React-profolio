import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import weatherDashboardImg from '../assets/weather-dashboard.png';
import taskManagerImg from '../assets/task-manager.png';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: '/showcase.jpg',
        liveLink: '#',
        githubLink: '#',
        category: 'Full Stack',
        featured: true
    },
    {
        title: 'Weather Dashboard',
        description: 'Real-time weather application with location detection, 5-day forecast, and beautiful UI.',
        tags: ['React', 'OpenWeather API', 'CSS'],
        image: weatherDashboardImg,
        liveLink: 'https://www.accuweather.com/',
        githubLink: '#',
        category: 'Frontend'
    },
    {
        title: 'Task Management App',
        description: 'Productivity tool to organize tasks with drag-and-drop, categories, and deadlines.',
        tags: ['React', 'Firebase', 'DnD Kit'],
        image: taskManagerImg,
        liveLink: 'https://to-do.office.com/tasks/',
        githubLink: '#',
        category: 'Frontend'
    }
];

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Frontend', 'Full Stack'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="section" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Check out some of my recent work and side projects
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap'
                }}>
                    {categories.map((category, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFilter(category)}
                            className={filter === category ? 'btn btn-primary' : 'btn btn-outline'}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            animate={{
                                y: [0, -12, 0]
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                y: {
                                    duration: 4 + index * 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            whileHover={{ y: -10 }}
                            className="card"
                            style={{
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--glass-border)',
                                padding: 0,
                                overflow: 'hidden'
                            }}
                        >
                            {/* Project Image */}
                            <div style={{
                                height: '200px',
                                width: '100%',
                                background: project.image.startsWith('linear')
                                    ? project.image
                                    : `url(${project.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative'
                            }}>
                                {project.featured && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        background: 'var(--gradient-accent)',
                                        color: 'white',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        fontWeight: 600
                                    }}>
                                        Featured
                                    </div>
                                )}
                            </div>

                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    marginBottom: '0.75rem',
                                    color: 'var(--text-primary)'
                                }}>
                                    {project.title}
                                </h3>

                                <p style={{
                                    color: 'var(--text-muted)',
                                    fontSize: '0.95rem',
                                    marginBottom: '1rem',
                                    lineHeight: 1.6
                                }}>
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                padding: '0.25rem 0.75rem',
                                                background: 'var(--glass-bg)',
                                                border: '1px solid var(--glass-border)',
                                                borderRadius: '12px',
                                                fontSize: '0.85rem',
                                                color: 'var(--accent-light-blue)'
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'var(--accent-blue)',
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                            transition: 'color 0.3s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-light-blue)'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-blue)'}
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'var(--text-muted)',
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                            transition: 'color 0.3s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                                    >
                                        <Github size={16} /> Source
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
