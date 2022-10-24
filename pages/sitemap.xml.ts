import { GetServerSideProps } from "next";
const Sitemap = () => {};
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  let page = 1;
  let listing = [];
  let done = false;

  if (res) {
    res.setHeader("Content-Type", "text/xml");
    res.write(`
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://karyayudi.vercel.app/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <lastmod>2022-11-03T03:16:20.318Z</lastmod>
  </url>
  <url>
    <loc>https://next-karyayudi-id.vercel.app/#about-me</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <lastmod>2022-11-03T03:16:20.318Z</lastmod>
  </url>
  <url>
    <loc>https://next-karyayudi-id.vercel.app/#myskill</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <lastmod>2022-11-03T03:16:20.318Z</lastmod>
  </url>
  <url>
    <loc>https://next-karyayudi-id.vercel.app/#myprojects</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <lastmod>2022-11-03T03:16:20.318Z</lastmod>
  </url>
  <url>
    <loc>https://next-karyayudi-id.vercel.app/#contact-me</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <lastmod>2022-11-03T03:16:20.318Z</lastmod>
  </url>
  <url>
    <loc>https://www.linkedin.com/in/yudian-nanda-malik-a280321b2/</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <lastmod>2022-11-03T03:16:20.318Z</lastmod>
  </url>
</urlset>`);
    res.end();
  }
  return {
    props: {},
  };
};
export default Sitemap;
