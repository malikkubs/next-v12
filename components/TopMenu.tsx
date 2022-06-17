import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import MenuDarg from "./MenuDrag";

function TopMenu({
  ogtype = "Presonal Profile",
  subtitle = "Sebuah situs web Profil pribadi dari Yudian Nanda Malik ",
  title = "karyayudi.id - " + subtitle,
  desc = "Situs Restorasi, Marketplace, dan Forum Mobil Kuno & Klasik Pertama di Indonesia",
  image = "/thumbnail.jpeg",
  keywords = "kuno id, mobil, klasik, kuno, vintage, hotrod, ratrod, bengkel, restorasi, modifikasi, custom, marketplace, komunitas, artikel, antik, antique, car",
  children,
}: any) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title}></meta>
        <meta name="description" content={desc}></meta>

        <meta property="og:type" content={ogtype}></meta>
        <meta property="og:url" content={"http://localhost:3000/#home"}></meta>
        <meta property="og:title" content={title}></meta>
        <meta property="og:description" content={desc}></meta>
        <meta property="og:image" content={image}></meta>
        <meta name="keywords" content={keywords} />
        <meta name="news_keywords" content={keywords} />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content={title} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="id" />
        <link
          rel="manifest"
          href="/manifest.json"
          crossOrigin="use-credentials"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-2048-2732.jpg"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-2732-2048.jpg"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-1668-2388.jpg"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-2388-1668.jpg"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-1536-2048.jpg"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-2048-1536.jpg"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-1668-2224.jpg"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-2224-1668.jpg"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-1620-2160.jpg"
          media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-2160-1620.jpg"
          media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-1284-2778.jpg"
          media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-2778-1284.jpg"
          media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-1170-2532.jpg"
          media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-2532-1170.jpg"
          media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-1125-2436.jpg"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-2436-1125.jpg"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-1242-2688.jpg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-2688-1242.jpg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-828-1792.jpg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-1792-828.jpg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-1242-2208.jpg"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-2208-1242.jpg"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-750-1334.jpg"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-1334-750.jpg"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-640-1136.jpg"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/logo/apple-splash-1136-640.jpg"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link rel="apple-touch-icon" href="/1.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />

        <meta
          name="google-site-verification"
          content="google-site-verification=X2X5kbBZbV70t_S3rVdrthLbhftqxrMn3d4FkelET9E"
        />

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:url"
          content="http://localhost:3000/#home"
        ></meta>
        <meta property="twitter:title" content={title}></meta>
        <meta property="twitter:description" content={desc}></meta>
        <meta property="twitter:image" content={image}></meta>
        <meta name="theme-color" content="#cd0c0d" />
        <meta
          name="google-site-verification"
          content="d9CcGvy92CknmEY4Y_N4mHk5qg7CQtt546K9TfW7ZOQ"
        />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"
        />
      </Head>
      <div className="overflow-clip">
        <MenuDarg />
        {/* <div style={{ zIndex: "9" }} className="absolute inset-0 ">
          
        </div> */}
        <div className="bg-red02 w-full flex fixed z-50">
          <div className="container h-16 mx-4 lg:mx-auto flex-row flex justify-between items-center">
            <div className="flex items-center justify-center">
              <img
                onClick={() => router.push("/")}
                src="/logo.svg"
                alt="ini logo bertulisan yudian"
              />
            </div>
            <div className="flex-row hidden md:flex">
              <MenuList nameMenu="Home" href="/#home" />
              <MenuList nameMenu="About Me" href="/#about-me" />
              <MenuList nameMenu="My Skill" href="/#myskill" />
              <MenuList nameMenu="My Projects" href="/#myprojects" />
              <MenuList nameMenu="Contact Me" href="/#contact-me" />
            </div>
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    </>
  );
}

function MenuList({ nameMenu, href }: any) {
  return (
    <div className="text-putih font-bold text-xl pl-6 hover:text-red">
      <a href={href}>{nameMenu}</a>
    </div>
  );
}

export default TopMenu;
