const repoName = "kimchichamchi-github-io"; // 깃허브 레포지토리명

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
};

export default nextConfig;
