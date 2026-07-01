import { Resend } from "resend";
import { business } from "@/data/site";
import type { LeadInput } from "./lead";

type LeadEmailPayload = {
  lead: LeadInput;
  leadId: string;
  fileReferences: string[];
};

export async function sendLeadEmails({ lead, leadId, fileReferences }: LeadEmailPayload) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const internalToEmail = process.env.RESEND_INTERNAL_TO_EMAIL || business.email;

  if (!resendApiKey || !fromEmail) {
    throw new Error("Resend server configuration is missing.");
  }

  const resend = new Resend(resendApiKey);
  const fullName = `${lead.firstName} ${lead.lastName}`;

  await Promise.all([
    resend.emails.send({
      from: fromEmail,
      to: lead.email,
      subject: "We received your Noble Hardwoods quote request",
      html: customerEmailHtml(lead)
    }),
    resend.emails.send({
      from: fromEmail,
      to: internalToEmail,
      subject: `New Website Lead: ${lead.projectType} in ${lead.city}`,
      html: internalEmailHtml({ lead, leadId, fullName, fileReferences })
    })
  ]);
}

function customerEmailHtml(lead: LeadInput) {
  return emailLayout(`
    <p>Hi ${escapeHtml(lead.firstName)},</p>
    <p>Thanks for reaching out to Noble Hardwoods. We received your quote request and will follow up to talk through your project.</p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin:24px 0;">
      ${row("Project type", lead.projectType)}
      ${row("Project size", lead.projectSize)}
      ${lead.workOptions.length > 0 ? row("Work options", lead.workOptions.join(", ")) : ""}
      ${row("City", lead.city)}
      ${row("Preferred contact", lead.preferredContactMethod)}
      ${lead.message ? row("Message", lead.message) : ""}
    </table>
    <p>If you need faster help, call us at <a href="${business.phoneHref}" style="color:#ef5f3d;font-weight:700;">${business.phone}</a>.</p>
    <p style="margin-top:28px;">The Noble Hardwoods Team</p>
  `);
}

function internalEmailHtml({
  lead,
  leadId,
  fullName,
  fileReferences
}: {
  lead: LeadInput;
  leadId: string;
  fullName: string;
  fileReferences: string[];
}) {
  const fileList =
    fileReferences.length > 0
      ? `<ul>${fileReferences.map((file) => `<li>${escapeHtml(file)}</li>`).join("")}</ul>`
      : "<p>No project files uploaded.</p>";

  return emailLayout(`
    <p><strong>New lead ID:</strong> ${escapeHtml(leadId)}</p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin:24px 0;">
      ${row("Name", fullName)}
      ${row("Phone", lead.phone)}
      ${row("Email", lead.email)}
      ${row("City", lead.city)}
      ${row("Project type", lead.projectType)}
      ${row("Project size", lead.projectSize)}
      ${row("Work options", lead.workOptions.length > 0 ? lead.workOptions.join(", ") : "None selected")}
      ${row("Preferred contact", lead.preferredContactMethod)}
      ${row("Message", lead.message || "No message provided.")}
      ${row("Source page", lead.sourcePage || "Not captured")}
      ${row("UTM source", lead.utmSource || "Not captured")}
      ${row("UTM medium", lead.utmMedium || "Not captured")}
      ${row("UTM campaign", lead.utmCampaign || "Not captured")}
    </table>
    <p><strong>Uploaded project files</strong></p>
    ${fileList}
  `);
}

function emailLayout(content: string) {
  return `
    <div style="font-family:Arial,sans-serif;background:#f7f4ef;padding:32px;color:#251f1b;">
      <div style="max-width:620px;margin:0 auto;background:#fff;padding:32px;border-top:6px solid #ef5f3d;">
        <h1 style="font-size:24px;margin:0 0 20px;color:#251f1b;">Noble Hardwoods</h1>
        ${content}
      </div>
    </div>
  `;
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;border:1px solid #e8e2da;font-weight:700;width:38%;">${escapeHtml(label)}</td>
      <td style="padding:10px 12px;border:1px solid #e8e2da;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
