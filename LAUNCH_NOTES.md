# Noble Hardwoods Launch Notes

## Deferred Production Connections

Supabase and Resend integration code is present, but production credentials and live service testing are intentionally deferred.

Before launch:

- Add production environment variables in Netlify.
- Run `supabase/phase-2-leads.sql` in the production Supabase project.
- Confirm the `lead-uploads` storage bucket exists.
- Verify Resend domain authentication, sender address, and internal recipient.
- Submit a real quote request from production.
- Confirm the lead is stored in `leads`.
- Confirm optional uploaded photos are stored and file rows are created in `lead_files`.
- Confirm both customer confirmation and internal notification emails are delivered.

Do not add Supabase service-role keys or Resend API keys to committed files.
