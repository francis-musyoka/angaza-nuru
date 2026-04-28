import type { NextConfig } from "next";

// Demo build: Next 16's image optimizer is rejecting the WordPress hotlinks
// even with a matching remotePattern (returns 400 "url parameter is not
// allowed"). Bypass the optimizer entirely with `unoptimized: true` so the
// original URLs are served directly. When the team brings real assets in-house
// (or uses a CDN we control), re-enable optimization.
const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "friendsofangazanuru.org",
                port: "",
                pathname: "/wp-content/uploads/**",
                search: "",
            },
        ],
    },
};

export default nextConfig;
