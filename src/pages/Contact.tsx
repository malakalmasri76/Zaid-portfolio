import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { site } from '@/data/site';

const contactInfo = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phoneLink}` },
  { icon: MessageCircle, label: 'WhatsApp', value: site.phone, href: `https://wa.me/${site.whatsapp}` },
  { icon: Linkedin, label: 'LinkedIn', value: site.name, href: site.linkedin },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!site.formEndpoint) {
      setError('The contact form has not been configured yet. Please email us directly.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error('Submission failed');
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setError('We could not send your message. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="page-padding pt-20 pb-12 text-center">
        <Reveal className="max-w-3xl mx-auto">
          <span className="section-label">Get in Touch</span>
          <h1 className="section-title mt-4 mb-6">Contact</h1>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear from you. Every great space starts with a conversation.
          </p>
        </Reveal>
      </section>

      <section className="page-padding pb-20">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <Reveal>
            <h3 className="font-display text-2xl font-medium mb-6 text-stone-900 dark:text-stone-100">Start a Project</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs tracking-widest2 uppercase text-stone-500 dark:text-stone-400 mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest2 uppercase text-stone-500 dark:text-stone-400 mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest2 uppercase text-stone-500 dark:text-stone-400 mb-2 block">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="input-field"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest2 uppercase text-stone-500 dark:text-stone-400 mb-2 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="input-field resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center" disabled={submitting}>
                {sent ? (
                  <><CheckCircle size={16} /> Message Sent</>
                ) : (
                  <>{submitting ? 'Sending…' : 'Send Message'} <Send size={16} /></>
                )}
              </button>
              {sent && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-green-600 text-center"
                >
                  Thank you! I'll get back to you soon.
                </motion.p>
              )}
              {error && <p role="alert" className="text-sm text-red-600 text-center">{error}</p>}
            </form>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={0.1}>
            <h3 className="font-display text-2xl font-medium mb-6 text-stone-900 dark:text-stone-100">Connect</h3>
            <div className="space-y-5 mb-10">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 border border-stone-200 dark:border-stone-800 hover:border-gold-500 transition-colors group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-stone-100 dark:bg-stone-800 group-hover:bg-gold-50 dark:group-hover:bg-gold-900/20 transition-colors">
                    <c.icon size={18} className="text-stone-600 dark:text-stone-400 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest2 uppercase text-stone-400">{c.label}</p>
                    <p className="text-sm text-stone-700 dark:text-stone-300">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 border border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 mb-2">
                <MapPin size={18} />
                <span className="text-xs tracking-widest2 uppercase">Office Location</span>
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400">Gaza, Palestine</p>
              
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
