// Update these values before publishing. Vite environment variables are set in
// your hosting provider or a local .env file; never put private API keys here.
export const site = {
  name: import.meta.env.VITE_SITE_NAME || 'Zaid Almasri',
  title: import.meta.env.VITE_SITE_TITLE || 'Zaid Almasri — Architect',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'zaidalmassri1@gmail.com',
  phone: import.meta.env.VITE_CONTACT_PHONE || '+972 59-702-8130',
  phoneLink: import.meta.env.VITE_CONTACT_PHONE_LINK || '+972597028130',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '972597028130',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/zed.almassri/',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/zed-almassri/',
  formEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mzdnowgg',
  brochurePdf: import.meta.env.VITE_BROCHURE_PDF || '/brochure.pdf',
};
