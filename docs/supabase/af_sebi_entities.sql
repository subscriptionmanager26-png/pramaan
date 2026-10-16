-- SEBI registered-entities enrichment (one row per CSV RowId).
-- Run in Supabase SQL editor (india-market-news), then: npm run af:push-entities-csv

create table if not exists public.af_sebi_entities (
  row_id text primary key,
  registration text,
  category text,
  entity_type text,
  name text not null,
  twitter_handle text,
  twitter_url text,
  substack_url text,
  updated_at timestamptz not null default now()
);

create index if not exists af_sebi_entities_registration_idx
  on public.af_sebi_entities (registration);

create index if not exists af_sebi_entities_twitter_url_idx
  on public.af_sebi_entities (twitter_url)
  where twitter_url is not null;

alter table public.af_sebi_entities enable row level security;
