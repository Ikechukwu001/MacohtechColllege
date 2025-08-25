// app/Blog/[slug]/page.js
import { client, fetchFromSanity } from "@/lib/sanity.client";
import { notFound } from "next/navigation";

export default async function BlogPage({ params }) {
  const { slug } = params;

  // Fetch post from Sanity
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    slug
  }`;

  const post = await fetchFromSanity(query, { slug });

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose">
        {/* Replace with a proper portable text renderer if needed */}
        {JSON.stringify(post.body)}
      </div>
    </main>
  );
}
