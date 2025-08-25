import { client } from "@/lib/sanity.client";
import Image from "next/image";

// GROQ query to fetch a single post by slug
const query = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    mainImage{
      asset->{
        url
      }
    },
    publishedAt,
    body
  }
`;

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await client.fetch(query, { slug });

  if (!post) {
    return <p className="text-center py-20">Post not found</p>;
  }

  return (
    <article className="max-w-3xl mx-auto py-16 px-4">
      {post.mainImage?.asset?.url && (
        <Image
          src={post.mainImage.asset.url}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg w-full object-cover"
        />
      )}
      <h1 className="text-4xl font-bold mt-6">{post.title}</h1>
      <p className="text-gray-500 text-sm mt-2">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {/* Render body (plain for now) */}
      <div className="mt-6 space-y-4 leading-relaxed text-lg text-gray-700">
        {post.body.map((block, i) => (
          <p key={i}>{block.children?.map((child) => child.text).join("")}</p>
        ))}
      </div>
    </article>
  );
}
