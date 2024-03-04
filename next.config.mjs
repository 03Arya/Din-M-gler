/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx'],

    images: {
        domains: ['res.cloudinary.com', 'dinmaegler.onrender.com'],
    },
};

export default nextConfig;