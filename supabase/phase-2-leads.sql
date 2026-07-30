create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  city text not null,
  project_type text not null,
  project_size text,
  work_options text[] not null default '{}',
  message text,
  preferred_contact_method text not null,
  source_page text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  status text not null default 'New',
  assigned_to text,
  notes text,
  notification_status text not null default 'Pending',
  customer_email_id text,
  internal_email_id text,
  notification_error text
);

alter table if exists public.leads
  add column if not exists project_size text;

alter table if exists public.leads
  add column if not exists work_options text[] not null default '{}';

alter table if exists public.leads
  add column if not exists notification_status text not null default 'Pending';

alter table if exists public.leads
  add column if not exists customer_email_id text;

alter table if exists public.leads
  add column if not exists internal_email_id text;

alter table if exists public.leads
  add column if not exists notification_error text;

create table if not exists public.lead_files (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  file_url text not null,
  file_type text,
  uploaded_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads(created_at desc);
create index if not exists leads_status_idx on public.leads(status);
create index if not exists leads_notification_status_idx
  on public.leads(notification_status);
create index if not exists lead_files_lead_id_idx on public.lead_files(lead_id);

alter table public.leads enable row level security;
alter table public.lead_files enable row level security;

revoke all on table public.leads from anon, authenticated;
revoke all on table public.lead_files from anon, authenticated;

insert into storage.buckets (id, name, public)
values ('lead-uploads', 'lead-uploads', false)
on conflict (id) do nothing;

update storage.buckets
set
  public = false,
  file_size_limit = 26214400,
  allowed_mime_types = array[
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif',
    'video/mp4',
    'video/quicktime',
    'video/webm'
  ]
where id = 'lead-uploads';
