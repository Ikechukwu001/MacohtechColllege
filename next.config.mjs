/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // allow Sanity images
  },
};

export default nextConfig; // ✅ instead of module.exports
