# Yoglala Website — Version 3

A responsive Next.js website concept for Yoglala, with the updated roof-and-sprout logo and a subtle Pahade Kagaj-inspired paper texture. The paper treatment is intentionally light and playful, not heavily distressed, so text stays readable.

## Run locally

Requirements: Node.js 20.9+ recommended and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Stop the server with Ctrl+C.

## What's in v3
- Updated Yoglala logo in the header and footer, including a light footer variant.
- Subtle handmade-paper visual treatment with cream, terracotta, forest green, olive, and ochre.
- Responsive navigation including Experiences.
- Homepage Experiences preview and full Experiences library.
- Story, philosophy, team, retreats, retreat detail, booking enquiry, gallery, free resources, contact, FAQ, privacy, terms, and wellness disclaimer pages.
- Mobile responsive layouts and focus-visible keyboard styling.

## Important current limitations
- This is a front-end MVP. Contact and booking forms are local demo interactions; they do not send data to Yoglala or create real bookings.
- There is no admin dashboard, database, payment gateway, authentication, or email delivery in this phase.
- Retreat entries, social links, venue information, and some imagery are illustrative and must be reviewed before public launch.
- Replace the example metadata URL in `src/app/layout.tsx` with the confirmed production domain before launch.
- Remote images currently use image URLs; verify permissions, reliability, and privacy before production.

## Next phase
Build the real booking workflow and team dashboard using server-side validation, a database, authentication, permissions, capacity checks, and email notifications. Do not treat the demo form as a live booking system.
