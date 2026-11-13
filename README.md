# Smiles Dental Care — Preview Website

Preview website for **Smiles Dental Care** (8527 Gulf Fwy, Houston, TX 77017),
built as a client preview: the clinic reviews the site and tells us what to
fix or add, then decides whether to make it theirs.

- **Stack:** Next.js 15 (App Router, static export) + React 19 + Tailwind CSS 3
- **Deploy:** Vercel — https://smiles-dental-care-preview-hanzla-ahmads-projects.vercel.app/
- **Design:** mobile-first, following the patterns of Tend / Dentologie /
  Roman Dental (Houston) and the structure of the MedBills medical site
  (`medical-facility-web`): slim sticky header, photo-led hero, grouped
  services, reviews, insurance, emergency, new-patient flow, booking form.

## Content

- Clinic facts (address, phone, hours, Dr. Andy Dinh, Medicaid & CHIP) are
  from the clinic's real Google listing and reviews.
- Standard dental-website content (full services, emergency, insurance
  plans, new-patient steps) was added at the owner's request and is covered
  by the disclaimer banner on the site — the clinic corrects anything wrong.
- Reviews are clearly-labeled paraphrases of real Google reviews.
- Photos are generic dental imagery from Unsplash (credited in the footer),
  not the clinic's own — real office/team photos replace them when the
  clinic shares them.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export in out/
```
