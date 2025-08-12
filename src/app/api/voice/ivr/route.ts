import { NextRequest } from 'next/server';
// src/app/api/voice/ivr/route.ts

// Run on the Edge (fast, no Node-only deps needed)
export const runtime = "edge";
export const dynamic = "force-dynamic";

// Numbers to forward to (can be the same for now)
const WATER_NUMBER = "+17863055509";
const HVAC_NUMBER = "+17863055509"; // replace later if you add a separate HVAC line

function xml(body: string) {
  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/xml" },
  });
}

function menuPrompt() {
  // TwiML menu + fallback if no input
  return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Gather input="dtmf" numDigits="1" action="/api/voice/ivr" method="POST" timeout="6">
    <Say>Welcome to Rapid Home Aid. Press 1 for water damage. Press 2 for H V A C.</Say>
  </Gather>
  <Say>We did not receive any input.</Say>
  <Redirect>/api/voice/ivr</Redirect>
</Response>`;
}

export async function GET() {
  // Simple ping in the browser to verify the endpoint is deployed
  return new Response("IVR endpoint OK", { status: 200 });
}

export async function POST(req: Request) {
  // Twilio posts application/x-www-form-urlencoded — formData() handles it
  const form = await req.formData().catch(() => null);
  const digits = form?.get("Digits")?.toString();

  // No selection yet? Play the menu.
  if (!digits) {
    return xml(menuPrompt());
  }

  // 1 → Water Damage
  if (digits === "1") {
    return xml(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Connecting you to a water damage specialist.</Say>
  <Dial record="record-from-answer" timeout="25">${WATER_NUMBER}</Dial>
</Response>`);
  }

  // 2 → HVAC
  if (digits === "2") {
    return xml(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Connecting you to our H V A C team.</Say>
  <Dial record="record-from-answer" timeout="25">${HVAC_NUMBER}</Dial>
</Response>`);
  }

  // Anything else → say invalid and return to menu
  return xml(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Invalid choice.</Say>
  <Redirect>/api/voice/ivr</Redirect>
</Response>`);
}


