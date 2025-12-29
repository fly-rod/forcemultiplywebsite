'use client';

import { useState, FormEvent } from 'react';
import HeroBackground from '@/components/HeroBackground';
import styles from './page.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setLoading(false);
      alert(error instanceof Error ? error.message : 'Failed to send message. Please try again or email directly at ward@forcemultiplyconsulting.com');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.contactPage}>
      <section className={styles.header}>
        <HeroBackground />
        <div className="container">
          <h1>Let's Talk</h1>
          <p className={styles.subtitle}>
            Book a 30-minute intro call. No sales pitch. Just honest conversation about your challenges.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactContent}>
            <div className={`${styles.contactInfo} scroll-animate-left`}>
              <h2>What happens next</h2>
              <p>
                Fill out the form or email directly at{' '}
                <a href="mailto:ward@forcemultiplyconsulting.com" className={styles.emailLink}>
                  ward@forcemultiplyconsulting.com
                </a>
              </p>

              <div className={styles.infoItems}>
                <div className={`${styles.infoItem} scroll-animate`}>
                  <h3>1. We'll respond fast</h3>
                  <p>
                    Usually within 24 hours. We'll set up a 30-minute intro call at a time that works for you.
                  </p>
                </div>

                <div className={`${styles.infoItem} scroll-animate animate-delay-1`}>
                  <h3>2. We'll listen first</h3>
                  <p>
                    No canned pitch. We ask questions, understand your situation, and figure out if we can actually help.
                  </p>
                </div>

                <div className={`${styles.infoItem} scroll-animate animate-delay-2`}>
                  <h3>3. We'll be honest</h3>
                  <p>
                    If we're not the right fit, we'll tell you. If we can help, we'll explain exactly how and what it looks like.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.formContainer} scroll-animate-right`}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <h3>Message received</h3>
                  <p>
                    We'll review your info and reach out within 24 hours to schedule a call.
                  </p>
                  <p>
                    Talk soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className={styles.resetButton}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">What are you interested in?</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="caio">Fractional Chief AI Officer (CAIO)</option>
                      <option value="cto">Fractional CTO / Technology Leadership</option>
                      <option value="cino">Fractional Chief Innovation Officer</option>
                      <option value="ai">AI Strategy & Implementation</option>
                      <option value="consulting">Technology & Platform Consulting</option>
                      <option value="other">Not sure / Let's talk</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`${styles.submitButton} hover-lift btn-press`}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
