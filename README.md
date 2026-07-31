# Zaid Almasri Portfolio

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

## Publish checklist

1. Replace the sample biography, projects, images, CV, statistics, and contact details with approved real content.
2. Copy `.env.example` to `.env.local` and set all contact and social values.
3. Create a form at [Formspree](https://formspree.io), then set `VITE_FORMSPREE_ENDPOINT` to its endpoint. This is required for contact messages to be delivered.
4. Set the same variables in your hosting provider's environment-variable settings.
5. Build with `npm.cmd run build` and deploy the generated `dist` folder, or import the repository into Vercel/Netlify.
6. Connect the final domain, then update the title, metadata, and add its URL to `public/robots.txt` and a sitemap.

`public/_redirects` supports Netlify and `vercel.json` supports Vercel so direct visits to portfolio routes keep working.

## Validation

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
```
