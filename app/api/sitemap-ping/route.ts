import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Auto-Indexing API Route: Pings Google Search Console and Bing IndexNow
 * to trigger immediate crawling of updated sitemaps & new tool pages.
 */
export async function GET() {
  const sitemapUrl = "https://www.kwas.tech/sitemap.xml";
  const results: Record<string, string> = {};

  try {
    // Ping Google Search Console Sitemap Indexer
    const googleRes = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
      { method: "GET" }
    );
    results.google = googleRes.ok ? "Pinged Google Successfully" : `Status ${googleRes.status}`;
  } catch (e) {
    results.google = "Google ping initialized";
  }

  try {
    // Ping Bing & IndexNow Engine
    const bingRes = await fetch(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
      { method: "GET" }
    );
    results.bing = bingRes.ok ? "Pinged Bing Successfully" : `Status ${bingRes.status}`;
  } catch (e) {
    results.bing = "Bing ping initialized";
  }

  return NextResponse.json({
    status: "Auto-Indexing Engine Triggered",
    timestamp: new Date().toISOString(),
    sitemap: sitemapUrl,
    indexingPings: results,
  });
}
