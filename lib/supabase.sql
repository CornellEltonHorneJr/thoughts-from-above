create table if not exists public.topics (id uuid primary key default gen_random_uuid(), name text not null unique, slug text not null unique, description text, created_at timestamptz default now());
create table if not exists public.articles (id uuid primary key default gen_random_uuid(), title text not null, slug text not null unique, subtitle text, excerpt text, content text not null, cover_image text, topic_id uuid references public.topics(id) on delete set null, published boolean default false, published_at timestamptz, created_at timestamptz default now(), updated_at timestamptz default now());
alter table public.topics enable row level security; alter table public.articles enable row level security;
create policy "public can read topics" on public.topics for select using (true);
create policy "public can read published articles" on public.articles for select using (published = true);
create policy "authenticated can manage topics" on public.topics for all to authenticated using (true) with check (true);
create policy "authenticated can manage articles" on public.articles for all to authenticated using (true) with check (true);
insert into public.topics(name,slug,description) values ('Faith','faith','Reflections on Scripture, faith, prayer, and the life of following Christ.'),('Life','life','Personal stories, emotional journeys, lessons, and everyday life.'),('Movies','movies','Reviews, reactions, and thoughts sparked by movies.'),('Music','music','Songs, artists, memories, and the stories music tells.'),('Politics','politics','Thoughts and reflections on the world of politics and public life.') on conflict (slug) do nothing;
-- For image uploads, create a Storage bucket named article-images in Supabase and set it to public.
