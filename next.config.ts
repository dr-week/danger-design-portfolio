import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}
 
const withMDX = createMDX({
  // You can add remark/rehype plugins here later if needed
})
 
export default withMDX(nextConfig)

