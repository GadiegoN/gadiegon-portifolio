import { getCookies } from "@/lib/meta";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { event_source_url, event_id } = body;

  const userAgent = req.headers.get("user-agent") || "";
  const ip = req.headers.get("x-forwarded-for") || "";

  const { fbp, fbc } = getCookies(req);

  const payload = {
    data: [
      {
        event_name: "Contact",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url,
        event_id,
        user_data: {
          client_ip_address: ip,
          client_user_agent: userAgent,
          fbp,
          fbc,
        },
      },
    ],
  };

  const res = await fetch(
    `https://graph.facebook.com/v21.0/${process.env.NEXT_PUBLIC_META_PIXEL}/events?access_token=${process.env.META_TOKEN}`,
    {
      method: "POST",
      body: JSON.stringify(payload),
    }
  );

  return Response.json(await res.json());
}
