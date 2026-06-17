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
  message text,
  preferred_contact_method text not null,
  source_page text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  status text not null default 'New',
  assigned_to text,
  notes text
);

create table if not exists public.lead_files (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  file_url text not null,
  file_type text,
  uploaded_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads(created_at desc);
create index if not exists leads_status_idx on public.leads(status);
create index if not exists lead_files_lead_id_idx on public.lead_files(lead_id);

insert into storage.buckets (id, name, public)
values ('lead-uploads', 'lead-uploads', false)
on conflict (id) do nothing;
