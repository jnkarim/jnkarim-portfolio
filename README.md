# Julker Nayeen Karim - Portfolio

Next.js 16 / React 19 / Tailwind CSS 4 portfolio with live project demos, awards, an embedded CV file, and a server-side contact form.

## Run locally

Requires Node.js 20.9 or later (Node 22 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What was updated

- All interface labels and content are in English.
- The former "Hire me" navigation and availability copy were removed.
- The CV is available at `/Julker_Nayeen_Karim_CV.pdf`; **View CV** opens it in a new tab and **Download CV** downloads the same original PDF.
- Awards include the 2026 Bangladesh Blockchain Olympiad result and Hong Kong international-round nomination, as stated in the supplied CV.
- Featured projects include FixMyDhaka, Dhaka Tesla Pool, AeroSight, Safeguard Vision, BookCycle, and Pokédex.
- The projects section also discovers **public repositories with a deployment link** from `github.com/jnkarim`. For original repositories, it checks the GitHub About/`homepage` field, README links, and enabled GitHub Pages. For forks, it uses only the fork's own homepage or Pages deployment, to avoid showing unrelated upstream demos. Results refresh every six hours. If GitHub cannot be reached, the six featured projects still display.
- Contact messages are submitted to a Next.js API endpoint and sent using Resend. The browser never sees the email API key.

## Configure email delivery (required to send messages)

This project does **not** include an email-provider API key. Without the configuration below, the contact form will show a clear error and visitors can still use the direct email link. Do not claim real deliveries until you test them with valid credentials.

1. Create a Resend account at https://resend.com and verify a sending domain in its dashboard (complete the requested DNS records).
2. Create an API key, then copy `.env.example` to `.env.local`.
3. Set `RESEND_API_KEY` to your secret key.
4. Set `CONTACT_FROM_EMAIL` to a sender address **on your verified domain**, e.g. `Portfolio <hello@yourdomain.com>`.
5. Set `CONTACT_TO_EMAIL` to the inbox where you want to receive messages (default: `julkernkarim@gmail.com`).
6. Restart `npm run dev`. Submit the contact form with a real return address. Confirm receipt in your inbox and try replying to verify `reply_to`.
7. In Vercel (or your hosting provider), add the same environment variables under your project's environment settings and **redeploy**.

Never put your Resend key in a `NEXT_PUBLIC_` variable or commit `.env.local`.

The contact API validates field lengths and email format, uses a spam-trap field, handles provider errors, and only reports success after the email provider accepts the message. An accepted send is not proof of final inbox delivery (spam filters and provider-side issues remain possible).

### Optional GitHub API token

Public project discovery works without a token, but GitHub's anonymous request limits apply. To raise the rate limit, set a read-only `GITHUB_TOKEN` server-side in `.env.local` and in your deployment environment. No repository write access is needed. Some projects may have deployment links only in uncommon files or formats and need to be added to `lib/data.ts` manually.

## Update profile content

- `lib/data.ts` - profile, experience, featured projects, skills, and awards.
- `lib/github.ts` - dynamic public GitHub repo and deployment-link discovery.
- `components/` - site sections.
- `app/api/contact/route.ts` - Resend-backed contact delivery.
- `public/Julker_Nayeen_Karim_CV.pdf` - CV served on the site.

## Production check

```bash
npm run build
npm run start
```

Check the CV view/download controls, visit all live-demo links, and submit a message after adding your email-provider credentials. GitHub and demo hosting availability can change independently of this code.
