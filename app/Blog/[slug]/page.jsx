// app/Blog/[slug]/page.js
import { client, fetchFromSanity } from "@/lib/sanity.client";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

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
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <article className="prose prose-lg max-w-none">
        <PortableText value={post.body} />
      </article>
    </main>
  );
}
