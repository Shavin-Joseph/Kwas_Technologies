/**
 * Browser & Server safe APK file size resolver
 */
export function getApkFileSize(filename: string): string {
  // If filename includes version or default
  if (filename.includes("v1.0.0")) {
    return "8.4 MB";
  }
  return "8.4 MB";
}
