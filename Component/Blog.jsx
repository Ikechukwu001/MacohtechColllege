"use client";

import { useEffect, useState } from "react";
import { client } from "@/lib/sanity.client";
import Link from "next/link";
import Image from "next/image";

// GROQ query to fetch posts
const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  mainImage{
    asset->{
      url
    }
  },
  publishedAt,
  body
} | order(publishedAt desc)`;

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(query);
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No blog posts yet...</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post._id} className="bg-white rounded-xl shadow p-4">
                {post.mainImage?.asset?.url && (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                )}
                <h3 className="text-xl font-semibold mt-4">{post.title}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="text-blue-500 mt-2 inline-block"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
