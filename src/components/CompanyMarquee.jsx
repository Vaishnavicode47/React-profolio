import React from 'react';
import { motion } from 'framer-motion';

const CompanyMarquee = () => {
    const companies = [
        { name: 'Google', emoji: '🔍' },
        { name: 'Microsoft', emoji: '💻' },
        { name: 'Amazon', emoji: '📦' },
        { name: 'Meta', emoji: '👥' },
        { name: 'Apple', emoji: '🍎' },
        { name: 'Netflix', emoji: '🎬' },
        { name: 'Tesla', emoji: '⚡' },
        { name: 'Adobe', emoji: '🎨' }
    ];

    // Duplicate the array for seamless loop
    const duplicatedCompanies = [...companies, ...companies];

    return (
        <section style={{
            padding: '3rem 0',
            background: 'var(--bg-primary)',
            borderTop: '1px solid var(--glass-border)',
            borderBottom: '1px solid var(--glass-border)',
            overflow: 'hidden'
        }}>
            {/* Marquee Container */}
            <div style={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}>
                <motion.div
                    animate={{
                        x: [0, -50 + '%']
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear"
                        }
                    }}
                    style={{
                        display: 'flex',
                        gap: '4rem',
                        width: 'fit-content'
                    }}
                >
                    {duplicatedCompanies.map((company, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem 2rem',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                whiteSpace: 'nowrap',
                                minWidth: '180px',
                                justifyContent: 'center'
                            }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>{company.emoji}</span>
                            <span style={{
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                color: 'var(--text-primary)'
                            }}>
                                {company.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CompanyMarquee;
