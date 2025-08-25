// lib/sanity.client.js
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // must exist
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true, // false if you want fresh data on SSR
  apiVersion: "2025-08-25", // use today’s date
});

// Optional helper to fetch GROQ queries
export const fetchFromSanity = async (query, params = {}) => {
  return client.fetch(query, params);
};
