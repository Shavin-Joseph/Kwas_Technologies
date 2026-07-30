export const firebaseConfig = {
  apiKey: "AIzaSyDC8-xNR7J3zGzkX_FT0CHobOP8HdZzNWg",
  authDomain: "havinjosephdotme.firebaseapp.com",
  projectId: "havinjosephdotme",
  storageBucket: "havinjosephdotme.firebasestorage.app",
  messagingSenderId: "736636360035",
  appId: "1:736636360035:web:08ef5e06078b9cea876f56",
  measurementId: "G-RYPNNKS9J9",
};

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FirestoreProduct {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  version: string;
  status: "In Development" | "Beta" | "Stable";
  category: "Key Web Apps" | "Android Apps" | "Privacy & Security" | "Developer Tools";
  platforms: string[];
  license: string;
  downloadUrl: string;
  sourceUrl: string;
  rating: number;
  downloads: number;
  size: string;
  isReleased: boolean;
  features: string[];
  releaseNotes: string;
}

/**
 * Submits contact form entries directly to Cloud Firestore in project "havinjosephdotme"
 */
export const submitToFirestore = async (data: ContactSubmission) => {
  const projectId = firebaseConfig.projectId;
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/contact_submissions`;

  const payload = {
    fields: {
      name: { stringValue: data.name },
      email: { stringValue: data.email },
      subject: { stringValue: data.subject },
      message: { stringValue: data.message },
      createdAt: { timestampValue: new Date().toISOString() },
      site: { stringValue: "KWAS Technologies (Key Web App Solutions Technologies)" },
    },
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch (e) {
    console.error("Firestore contact submission error:", e);
    return true;
  }
};

/**
 * Fetches live product software entries from Cloud Firestore
 */
export const fetchProductsFromFirestore = async (): Promise<FirestoreProduct[] | null> => {
  const projectId = firebaseConfig.projectId;
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/products`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.documents || !Array.isArray(data.documents)) return null;

    return data.documents.map((doc: any) => {
      const f = doc.fields || {};
      return {
        slug: f.slug?.stringValue || "app",
        name: f.name?.stringValue || "KWAS Application",
        tagline: f.tagline?.stringValue || "Key Web App Solution",
        description: f.description?.stringValue || "Under active development by KWAS Technologies.",
        version: f.version?.stringValue || "v0.1.0-dev",
        status: (f.status?.stringValue as any) || "In Development",
        category: (f.category?.stringValue as any) || "Key Web Apps",
        platforms: f.platforms?.arrayValue?.values?.map((v: any) => v.stringValue) || ["Web App", "Android"],
        license: f.license?.stringValue || "Free + Open Source",
        downloadUrl: f.downloadUrl?.stringValue || "#",
        sourceUrl: f.sourceUrl?.stringValue || "https://github.com/kwas-tech",
        rating: parseFloat(f.rating?.doubleValue || f.rating?.integerValue || "5.0"),
        downloads: parseInt(f.downloads?.integerValue || "0", 10),
        size: f.size?.stringValue || "TBA (In Development)",
        isReleased: f.isReleased?.booleanValue || false,
        features: f.features?.arrayValue?.values?.map((v: any) => v.stringValue) || [
          "Under active development",
          "Open source roadmap",
        ],
        releaseNotes: f.releaseNotes?.stringValue || "In active pre-release development cycle.",
      };
    });
  } catch (err) {
    console.warn("Could not fetch products from Firestore, using initial state:", err);
    return null;
  }
};
