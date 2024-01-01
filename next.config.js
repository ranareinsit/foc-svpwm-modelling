/** @type {import('next').NextConfig} */
const nextConfig = {
    /*
    github actions: build
    action: Static HTML export with Next.js
    The "next export" command has been removed in favor of "output: export" in next.config.js. Learn more: https://nextjs.org/docs/advanced-features/static-html-export
    https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
    */
    output: 'export'
}

module.exports = nextConfig
