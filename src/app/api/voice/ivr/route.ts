export const runtime = "edge";
export const dynamic = "force-dynamic";

const WATER_NUMBER = "+17863055509";
const HVAC_NUMBER = "+17863055509";

function xml(body: string) {
  return new Response(body, { status: 200, headers: { "Content-Type": "text/xml" } });
}

function menuPrompt() {
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
  return xml(menuPrompt());
}

export async function POST(req: Request) {
  const form = await req.formData().catch(() => null);
  const digits = form?.get("Digits")?.toString();

  if (!digits) return xml(menuPrompt());

  if (digits === "1") {
    return xml(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Connecting you to a water damage specialist.</Say>
  <Dial record="record-from-answer" timeout="25">${WATER_NUMBER}</Dial>
</Response>`);
  }

  if (digits === "2") {
    return xml(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Connecting you to our H V A C team.</Say>
  <Dial record="record-from-answer" timeout="25">${HVAC_NUMBER}</Dial>
</Response>`);
  }

  return xml(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Invalid choice.</Say>
  <Redirect>/api/voice/ivr</Redirect>
</Response>`);
}
