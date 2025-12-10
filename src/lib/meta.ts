export function getCookies(req: Request) {
  const cookies = req.headers.get("cookie") || "";
  const fbp = cookies.match(/_fbp=([^;]+)/)?.[1] || null;
  const fbc = cookies.match(/_fbc=([^;]+)/)?.[1] || null;
  return { fbp, fbc };
}
