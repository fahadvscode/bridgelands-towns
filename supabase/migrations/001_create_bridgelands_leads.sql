create table if not exists bridgelands_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  site_source text not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  is_broker boolean not null default false,
  casl_consent boolean not null default false,
  consent_timestamp timestamptz,
  consent_page_path text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text
);

alter table bridgelands_leads enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'bridgelands_leads'
      and policyname = 'anon can insert bridgelands_leads'
  ) then
    create policy "anon can insert bridgelands_leads"
      on bridgelands_leads for insert
      to anon
      with check (true);
  end if;
end $$;
