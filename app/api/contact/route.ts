import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Afzender — pas aan naar een adres op je geverifieerde domein zodra dat klaar is,
// bijv. "Gridstate <formulier@gridstate.nl>". Tot die tijd het Resend-testdomein.
const FROM = process.env.CONTACT_FROM ?? "Gridstate <onboarding@resend.dev>";
// Ontvangers van de formulierinzendingen.
const TO = (process.env.CONTACT_TO ?? "l.gazenbeek@gridstate.nl,info@gridstate.nl")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "E-mailservice niet geconfigureerd." },
      { status: 500 }
    );
  }

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const company = String(data.company ?? "").trim();
  const email = String(data.email ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const role = String(data.role ?? "").trim();
  const message = String(data.message ?? "").trim();

  // Minimale validatie — naam en een geldig e-mailadres zijn verplicht.
  if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { error: "Vul je naam en een geldig e-mailadres in." },
      { status: 400 }
    );
  }

  const rows: [string, string][] = [
    ["Naam", name],
    ["Bedrijf", company],
    ["E-mail", email],
    ["Telefoon", phone || "—"],
    ["Rol", role || "—"],
  ];

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a0810">
      <h2 style="color:#470020;margin:0 0 16px">Nieuw bericht via de website</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px;background:#f9f6f4;border:1px solid #e8e0dc;font-weight:600;width:140px">${label}</td>
            <td style="padding:8px 12px;border:1px solid #e8e0dc">${escapeHtml(value)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <h3 style="color:#470020;margin:24px 0 8px">Bericht</h3>
      <p style="white-space:pre-wrap;line-height:1.6;font-size:14px">${escapeHtml(message) || "—"}</p>
    </div>`;

  try {
    const result = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Website contact — ${name}${company ? ` (${company})` : ""}`,
      html,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "Versturen mislukt." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Versturen mislukt." }, { status: 500 });
  }
}
