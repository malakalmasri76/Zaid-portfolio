import { site } from '@/data/site';

export default function Privacy() {
  return (
    <section className="page-padding pt-36 pb-20 max-w-4xl mx-auto">
      <span className="section-label">Legal</span>
      <h1 className="section-title mt-4 mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-stone-600 dark:text-stone-400 leading-relaxed">
        <p>Last updated: July 2026</p>
        <p>When you submit the contact form, we receive the name, email address, subject, and message you provide. We use this information only to respond to your inquiry and do not sell it.</p>
        <p>Messages are processed by our contact-form provider. Please do not include sensitive personal information in the form.</p>
        <p>To request access to or deletion of your message, contact us at <a className="text-gold-600 hover:underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div>
    </section>
  );
}
