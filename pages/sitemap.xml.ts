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
    <loc>http://www.example.com/foo.html</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <lastmod>2021-11-03T03:16:20.318Z</lastmod>
  </url>
</urlset>`);
    res.end();
  }
  return {
    props: {},
  };
};
export default Sitemap;
