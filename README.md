# Thoughts From Above

A custom editorial website for Ms. Vazquez.

## Stack
- Next.js
- Supabase (authentication + PostgreSQL + image storage)
- Vercel-ready

## Setup
1. Create a Supabase project.
2. In Supabase SQL Editor, run `supabase.sql`.
3. Enable Email/Password authentication in Supabase Auth and create Ms. Vazquez's user account.
4. Create a public Storage bucket named `article-images` if you want hosted article images.
5. Copy `.env.example` to `.env.local` and add your Supabase URL and anon key.
6. Run `npm install` then `npm run dev`.

The public site is at `/`. The private editor is at `/admin`.

### Next upgrade
The MVP editor currently accepts a cover image URL and article HTML. The next polish pass should add a true rich-text editor and drag/drop image uploader backed by Supabase Storage. The database and UI are already structured for topics, individual article pages, drafts, publishing, and editing.
