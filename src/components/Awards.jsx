import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const achievements = [
    {
        icon: <Trophy size={32} />,
        title: 'Projects Completed',
        count: 15,
        suffix: '+',
        color: 'text-yellow-400'
    },
    {
        icon: <Award size={32} />,
        title: 'Certifications',
        count: 5,
        suffix: '',
        color: 'text-blue-400'
    },
    {
        icon: <Star size={32} />,
        title: 'Client Satisfaction',
        count: 98,
        suffix: '%',
        color: 'text-purple-400'
    },
    {
        icon: <Medal size={32} />,
        title: 'Awards Won',
        count: 3,
        suffix: '',
        color: 'text-green-400'
    }
];

const certifications = [
    {
        title: 'React Developer Certification',
        issuer: 'Meta',
        year: '2024',
        badge: '🎓'
    },
    {
        title: 'JavaScript Algorithms',
        issuer: 'freeCodeCamp',
        year: '2023',
        badge: '💻'
    },
    {
        title: 'Responsive Web Design',
        issuer: 'freeCodeCamp',
        year: '2023',
        badge: '🎨'
    },
    {
        title: 'Frontend Development',
        issuer: 'Coursera',
        year: '2023',
        badge: '⚡'
    }
];

const CounterAnimation = ({ end, suffix, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        const duration = 2000; // 2 seconds

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, isVisible]);

    return <span>{count}{suffix}</span>;
};

const Awards = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, once: true });

    return (
        <section id="awards" className="section" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Awards & <span className="gradient-text">Achievements</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Recognition and milestones achieved throughout my journey
                    </p>
                </motion.div>

                {/* Achievement Stats */}
                <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
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
                            className="card text-center"
                            style={{
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--glass-border)'
                            }}
                        >
                            <div className={`${achievement.color} mb-4 flex justify-center`}>
                                {achievement.icon}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                                <CounterAnimation
                                    end={achievement.count}
                                    suffix={achievement.suffix}
                                    isVisible={isVisible}
                                />
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                {achievement.title}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-center mb-8"
                    style={{ color: 'var(--text-primary)' }}
                >
                    Certifications
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            animate={{
                                y: [0, -8, 0]
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                y: {
                                    duration: 3.5 + index * 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className="card"
                            style={{
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}
                        >
                            <div style={{ fontSize: '2.5rem' }}>{cert.badge}</div>
                            <div style={{ flex: 1 }}>
                                <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                                    {cert.title}
                                </h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    {cert.issuer} • {cert.year}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
