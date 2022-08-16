import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import MenuDarg from "./MenuDrag";
import * as ga from "../utils/google_analitycs.js";

function TopMenu({
  ogtype = "Presonal Profile",
  subtitle = "Sebuah situs web Profil pribadi dari Yudian Nanda Malik ",
  title = "karyayudi.id - " + subtitle,
  desc = "Situs Personal, Untuk Memperkenalkan siapa Yudian Malik.",
  image = "/thumbnail.jpeg",
  keywords = "yudian, malik, yudian malik, yudi, karya yudi, next karya yudi, karyayudi.id, pemrograman, laravel, nextjs, reactjs, tailwind, petugas partai,",
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
        <meta name="language" content="id" />
        <link
          rel="manifest"
          href="/manifest.json"
          crossOrigin="use-credentials"
        />

        <link
          rel="apple-touch-icon"
          sizes="48x48"
          href="assets/icons/icon-48x48.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="assets/icons/icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="icons-ce3ab881bd31f1efc59c9c227d8f6b7f/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="94x96"
          href="assets/icons/icon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="128x128"
          href="assets/icons/icon-128x128.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="assets/icons/icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="assets/icons/icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="assets/icons/icon-192x192.png"
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="@dasnoo/graffity-inferno"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          href="splash_screens/12.9__iPad_Pro_landscape.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          href="splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          href="splash_screens/10.9__iPad_Air_landscape.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          href="splash_screens/10.5__iPad_Air_landscape.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          href="splash_screens/10.2__iPad_landscape.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          href="splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          href="splash_screens/iPhone_14_Pro_Max__iPhone_14_Max__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          href="splash_screens/iPhone_14_Pro__iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          href="splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          href="splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          href="splash_screens/iPhone_11__iPhone_XR_landscape.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          href="splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          href="splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          href="splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          href="splash_screens/12.9__iPad_Pro_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          href="splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          href="splash_screens/10.9__iPad_Air_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          href="splash_screens/10.5__iPad_Air_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          href="splash_screens/10.2__iPad_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          href="splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="splash_screens/iPhone_14_Pro_Max__iPhone_14_Max__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="splash_screens/iPhone_14_Pro__iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          href="splash_screens/iPhone_11__iPhone_XR_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          href="splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          href="splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png"
        />

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
              <MenuList onClick={() => {}} nameMenu="Home" href="/#home" />
              <MenuList
                onClick={() => {}}
                nameMenu="About Me"
                href="/#about-me"
              />
              <MenuList
                onClick={() => {}}
                nameMenu="My Skill"
                href="/#myskill"
              />
              <MenuList
                onClick={() => {}}
                nameMenu="My Projects"
                href="/#myprojects"
              />
              <MenuList
                onClick={() => {
                  ga.EvenClick("/#contact-me");
                }}
                nameMenu="Contact Me"
                href="/#contact-me"
              />
            </div>
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    </>
  );
}

function MenuList({ nameMenu, href, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="text-putih font-bold text-xl pl-6 hover:text-red"
    >
      <a href={href}>{nameMenu}</a>
    </div>
  );
}

export default TopMenu;
