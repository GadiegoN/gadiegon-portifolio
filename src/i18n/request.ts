import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const rawLocale = cookieStore.get("NEXT_LOCALE")?.value || "pt-BR";
  const locale = rawLocale.toLowerCase().startsWith("en") ? "en" : "pt-BR";

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
    defaultLocale: "pt-BR",
    timeZone: "America/Sao_Paulo",
  };
});
