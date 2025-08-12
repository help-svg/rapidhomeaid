import type { NextRequest } from "next/server";

export const runtime = "edge";          // or "nodejs" if you prefer
export const dynamic = "force-dynamic"; // ensure it never gets statically analyzed

export async function GET(_req: NextRequest) {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
