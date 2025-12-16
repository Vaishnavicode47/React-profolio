import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState(''); // 'success', 'error', or ''

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setFormStatus('success');
        setTimeout(() => {
            setFormStatus('');
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    const contactInfo = [
        { icon: <Mail size={20} />, label: 'Email', value: 'vaishuperiasamy0487@gmail.com' },
        { icon: <Phone size={20} />, label: 'Phone', value: '8248599480' },
        { icon: <MapPin size={20} />, label: 'Location', value: 'India' }
    ];

    return (
        <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Have a project in mind? Let's work together to create something amazing
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '3rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        animate={{
                            y: [0, -10, 0]
                        }}
                        transition={{
                            duration: 0.8,
                            y: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <h3 style={{
                            fontSize: '1.8rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            color: 'var(--text-primary)'
                        }}>
                            Contact Information
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '1rem',
                                        background: 'var(--bg-primary)',
                                        borderRadius: '12px',
                                        border: '1px solid var(--glass-border)'
                                    }}
                                >
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'var(--gradient-accent)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--text-muted)',
                                            marginBottom: '0.25rem'
                                        }}>
                                            {info.label}
                                        </p>
                                        <p style={{
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            color: 'var(--text-primary)'
                                        }}>
                                            {info.value}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        animate={{
                            y: [0, -10, 0]
                        }}
                        transition={{
                            duration: 0.8,
                            y: {
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Name Input */}
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        background: 'var(--bg-primary)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '8px',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'border-color 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                />
                                <label style={{
                                    position: 'absolute',
                                    left: '1rem',
                                    top: formData.name ? '-0.5rem' : '1rem',
                                    fontSize: formData.name ? '0.75rem' : '1rem',
                                    color: 'var(--text-muted)',
                                    background: 'var(--bg-secondary)',
                                    padding: '0 0.5rem',
                                    transition: 'all 0.3s',
                                    pointerEvents: 'none'
                                }}>
                                    Your Name
                                </label>
                            </div>

                            {/* Email Input */}
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        background: 'var(--bg-primary)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '8px',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'border-color 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                />
                                <label style={{
                                    position: 'absolute',
                                    left: '1rem',
                                    top: formData.email ? '-0.5rem' : '1rem',
                                    fontSize: formData.email ? '0.75rem' : '1rem',
                                    color: 'var(--text-muted)',
                                    background: 'var(--bg-secondary)',
                                    padding: '0 0.5rem',
                                    transition: 'all 0.3s',
                                    pointerEvents: 'none'
                                }}>
                                    Your Email
                                </label>
                            </div>

                            {/* Message Textarea */}
                            <div style={{ position: 'relative' }}>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        background: 'var(--bg-primary)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '8px',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'border-color 0.3s',
                                        resize: 'vertical',
                                        fontFamily: 'inherit'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                />
                                <label style={{
                                    position: 'absolute',
                                    left: '1rem',
                                    top: formData.message ? '-0.5rem' : '1rem',
                                    fontSize: formData.message ? '0.75rem' : '1rem',
                                    color: 'var(--text-muted)',
                                    background: 'var(--bg-secondary)',
                                    padding: '0 0.5rem',
                                    transition: 'all 0.3s',
                                    pointerEvents: 'none'
                                }}>
                                    Your Message
                                </label>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-primary"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <Send size={18} /> Send Message
                            </motion.button>

                            {/* Form Status */}
                            {formStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        padding: '1rem',
                                        background: 'rgba(34, 197, 94, 0.1)',
                                        border: '1px solid rgba(34, 197, 94, 0.3)',
                                        borderRadius: '8px',
                                        color: '#22c55e',
                                        textAlign: 'center'
                                    }}
                                >
                                    ✓ Message sent successfully!
                                </motion.div>
                            )}
                        </form>
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
        input:focus + label,
        input:not(:placeholder-shown) + label,
        textarea:focus + label,
        textarea:not(:placeholder-shown) + label {
          top: -0.5rem !important;
          font-size: 0.75rem !important;
          color: var(--accent-blue) !important;
        }
      `}</style>
        </section>
    );
};

export default Contact;
