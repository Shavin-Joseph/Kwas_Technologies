export interface GitHubReleaseInfo {
  version: string;
  downloadUrl: string;
  releasePageUrl: string;
  size: string;
  downloads: number;
  releaseNotes: string;
  publishedAt: string;
  sourceUrl: string;
}

/**
 * Fetches latest release metadata directly from GitHub Releases API
 * for repo: Shavin-Joseph/Sys_Info
 */
export async function fetchLatestGitHubRelease(
  owner: string = "Shavin-Joseph",
  repo: string = "Sys_Info"
): Promise<GitHubReleaseInfo | null> {
  const url = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 }, // Cache for 60 seconds
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!res.ok) {
      console.warn(`GitHub Releases API status ${res.status} for ${owner}/${repo}`);
      return null;
    }

    const data = await res.json();
    const apkAsset = data.assets?.find((a: any) =>
      a.name.toLowerCase().endsWith(".apk")
    ) || data.assets?.[0];

    const sizeInBytes = apkAsset?.size || 0;
    const formattedSize =
      sizeInBytes > 0
        ? `${(sizeInBytes / (1024 * 1024)).toFixed(1)} MB`
        : "8.4 MB";

    const totalDownloads = data.assets?.reduce(
      (acc: number, asset: any) => acc + (asset.download_count || 0),
      0
    ) || 0;

    return {
      version: data.tag_name || "v1.0.0",
      downloadUrl: apkAsset?.browser_download_url || "/downloads/kwas-syslens-v1.0.0.apk",
      releasePageUrl: data.html_url || `https://github.com/${owner}/${repo}/releases/tag/v1.0.0`,
      size: formattedSize,
      downloads: totalDownloads,
      releaseNotes: data.body || "KWAS SysLens release package published on GitHub.",
      publishedAt: data.published_at ? new Date(data.published_at).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "August 2026",
      sourceUrl: `https://github.com/${owner}/${repo}`,
    };
  } catch (e) {
    console.warn("Could not fetch GitHub release info:", e);
    return null;
  }
}
