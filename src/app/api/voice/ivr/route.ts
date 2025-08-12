import type { NextRequest } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(_req: NextRequest) {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Rapid Home Aid IVR. Press 1 for water damage, 2 for HVAC. (Demo)</Say>
</Response>`;
  return new Response(twiml, {
    status: 200,
    headers: { "content-type": "text/xml" },
  });
}

// Optional: simple GET to see something in the browser
export async function GET() {
  return new Response("IVR endpoint OK", { status: 200 });
}
