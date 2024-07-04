/** 
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
 basePath: "/portfolio",
 output: "export",
 reactStrictMode: true,
 images: {
  loader: 'custom',
  loaderFile: ['./public/projectPic2.png', './public/pedro-corsi2.jpg']
 }
}

export default nextConfig
