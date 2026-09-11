"use client";

import { useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { GitHubContribution } from "@/lib/github";

interface ContributionCalendarProps {
  contributions: GitHubContribution[];
}

const levelClasses = [
  "bg-muted",
  "bg-primary/15",
  "bg-primary/35",
  "bg-primary/60",
  "bg-primary",
];

function toDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function startOfWeek(date: Date): Date {
  const start = new Date(date);
  start.setUTCDate(start.getUTCDate() - start.getUTCDay());
  return start;
}

export function ContributionCalendar({
  contributions,
}: ContributionCalendarProps) {
  const calendarScrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Contributions");
  const locale = useLocale();
  const today = new Date();
  const firstDay = new Date(today);
  firstDay.setUTCFullYear(firstDay.getUTCFullYear() - 1);
  const gridStart = startOfWeek(firstDay);
  const gridEnd = new Date(today);
  gridEnd.setUTCDate(gridEnd.getUTCDate() + (6 - gridEnd.getUTCDay()));

  const contributionMap = new Map(
    contributions.map((contribution) => [contribution.date, contribution]),
  );
  const weeks: Date[][] = [];
  let current = new Date(gridStart);

  while (current <= gridEnd) {
    const week: Date[] = [];
    for (let day = 0; day < 7; day += 1) {
      week.push(new Date(current));
      current.setUTCDate(current.getUTCDate() + 1);
    }
    weeks.push(week);
  }

  useEffect(() => {
    const calendarScroll = calendarScrollRef.current;
    if (calendarScroll) {
      calendarScroll.scrollLeft = calendarScroll.scrollWidth;
    }
  }, [weeks.length]);

  const total = contributions.reduce(
    (sum, contribution) => sum + contribution.count,
    0,
  );
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const monthFormatter = new Intl.DateTimeFormat(locale, { month: "short" });
  const weekdays = [
    t("sunday"),
    t("monday"),
    t("tuesday"),
    t("wednesday"),
    t("thursday"),
    t("friday"),
    t("saturday"),
  ];

  return (
    <section
      className="border-t border-border/60 py-16 md:py-20"
      aria-labelledby="contributions-title"
    >
      <div className="container mx-auto max-w-5xl px-6 md:px-8">
        <h2
          id="contributions-title"
          className="text-base font-semibold text-foreground"
        >
          {t("summary", { count: total })}
        </h2>

        <div
          ref={calendarScrollRef}
          className="contribution-scrollbar mt-4 overflow-x-auto pb-2"
        >
          <div className="min-w-max pr-2">
            <div className="ml-8 grid grid-cols-[repeat(53,11px)] gap-1 text-[10px] text-muted-foreground">
              {weeks.map((week, index) => {
                const monthStart = week.find((date) => date.getUTCDate() === 1);
                return (
                  <span key={index} className="h-4 whitespace-nowrap">
                    {monthStart ? monthFormatter.format(monthStart) : ""}
                  </span>
                );
              })}
            </div>

            <div className="flex gap-2">
              <div className="grid w-6 grid-rows-7 gap-1 text-[10px] leading-[11px] text-muted-foreground">
                {weekdays.map((weekday, index) => (
                  <span key={weekday} className="h-[11px] text-right">
                    {index % 2 === 1 ? weekday : ""}
                  </span>
                ))}
              </div>

              <div
                className="flex gap-1"
                role="grid"
                aria-label={t("grid_label")}
              >
                {weeks.map((week) => (
                  <div
                    key={toDateKey(week[0])}
                    className="grid grid-rows-7 gap-1"
                    role="row"
                  >
                    {week.map((date) => {
                      const contribution = contributionMap.get(toDateKey(date));
                      const count = contribution?.count ?? 0;
                      const level = contribution?.level ?? 0;
                      const label = t("tooltip", {
                        count,
                        date: dateFormatter.format(date),
                      });

                      return (
                        <span
                          key={toDateKey(date)}
                          className={`h-[11px] w-[11px] rounded-[2px] ${levelClasses[Math.min(level, 4)]}`}
                          title={label}
                          aria-label={label}
                          role="gridcell"
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-end gap-1.5 text-[10px] text-muted-foreground">
          <span>{t("less")}</span>
          {levelClasses.map((levelClass) => (
            <span
              key={levelClass}
              className={`h-[11px] w-[11px] rounded-[2px] ${levelClass}`}
              aria-hidden="true"
            />
          ))}
          <span>{t("more")}</span>
        </div>
      </div>
    </section>
  );
}
