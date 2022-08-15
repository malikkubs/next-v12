import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-G1SKPQR42K"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-G1SKPQR42K');
// </script>
function MyApp({ Component, pageProps }: AppProps) {
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
