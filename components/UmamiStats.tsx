"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface StatsResponseValue {
  value?: number;
}

interface StatsResponse {
  pageviews?: StatsResponseValue;
  visits?: StatsResponseValue;
}

export default function UmamiStats() {
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [loaded, setLoaded] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_UMAMI_API_URL;
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const shareId = process.env.NEXT_PUBLIC_UMAMI_SHARE_ID;

  useEffect(() => {
    async function fetchStats() {
      try {
        if (!apiUrl || !websiteId || !shareId) {
          setLoaded(true);
          return;
        }
        const url = `${apiUrl}/api/websites/${websiteId}/stats?period=24h&shareId=${shareId}`;
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) {
          setLoaded(true);
          return;
        }
        const data: StatsResponse = await res.json();
        setStats(data);
        setLoaded(true);
      } catch {
        setLoaded(true);
      }
    }
    fetchStats();
  }, [apiUrl, websiteId, shareId]);

  return (
    <div className="text-sm text-muted-foreground">
      {stats ? (
        <div className="flex items-center gap-4">
          <span>24小时访问：{stats.visits?.value ?? "-"}</span>
          <span>24小时浏览：{stats.pageviews?.value ?? "-"}</span>
        </div>
      ) : (
        loaded && (
          <div className="flex items-center gap-2">
            <span>Umami统计未配置</span>
            <Link
              href="https://umami.is"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              了解 Umami
            </Link>
          </div>
        )
      )}
    </div>
  );
}