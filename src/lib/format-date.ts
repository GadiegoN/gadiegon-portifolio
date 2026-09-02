export function formatBlogDate(dateStr: string, locale: string = "pt-BR"): string {
  try {
    const parts = dateStr.split("-").map(Number);
    if (parts.length !== 3) return dateStr;

    const [year, month, day] = parts;
    const date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));

    if (locale.toLowerCase().startsWith("en")) {
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      }).format(date); // Ex: Sep 2, 2026
    }

    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(date); // Ex: 02 de setembro de 2026
  } catch {
    return dateStr;
  }
}

export function formatCertificateDate(dateStr: string, locale: string = "pt-BR"): string {
  if (!locale.toLowerCase().startsWith("en")) {
    return dateStr;
  }

  const mapMonths: Record<string, string> = {
    jan: "Jan",
    fev: "Feb",
    mar: "Mar",
    abr: "Apr",
    mai: "May",
    jun: "Jun",
    jul: "Jul",
    ago: "Aug",
    set: "Sep",
    out: "Oct",
    nov: "Nov",
    dez: "Dec",
  };

  let formatted = dateStr;
  for (const [pt, en] of Object.entries(mapMonths)) {
    if (formatted.toLowerCase().includes(pt)) {
      formatted = formatted.replace(new RegExp(`${pt} de `, "i"), `${en} `);
      break;
    }
  }

  return formatted;
}
