import Head from "next/head";
import Image from "next/image";
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
        <link rel="manifest" href="/manifest.json" />
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
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"
        />

        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=false;"
        />

        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;"
        />
      </Head>
      <div className="overflow-clip">
        <MenuDarg />
        {/* <div style={{ zIndex: "9" }} className="absolute inset-0 ">
          
        </div> */}
        <div className="bg-red02 w-full flex fixed z-50">
          <div className="container h-16 mx-4 lg:mx-auto flex-row flex justify-between items-center">
            <div className="flex items-center justify-center">
              <Image
                width={128}
                height={43}
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
