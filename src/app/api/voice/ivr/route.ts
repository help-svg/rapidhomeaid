export async function POST(){
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Rapid Home Aid IVR coming soon. Press 1 for water damage, 2 for HVAC.</Say>
</Response>`;
  return new Response(twiml, { status: 200, headers: { 'Content-Type': 'text/xml' } });
}
