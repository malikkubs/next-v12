import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import * as ga from "../utils/google_analitycs.js";
import { useRouter } from "next/router";

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-G1SKPQR42K"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-G1SKPQR42K');
// </script>
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    function HendleRouteChange(url) {
      ga.PageView(url);
    }
    router.events.on("routeChangeComplete", HendleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", HendleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-G1SKPQR42K`}
      />
      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-G1SKPQR42K');

      `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
