// lib/sanity.client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // from .env.local
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // faster, cache-enabled
  apiVersion: "2025-08-25", // today’s date
});
