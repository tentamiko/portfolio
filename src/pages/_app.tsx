import type { AppProps } from "next/app";
import "ress/dist/ress.min.css";
import { injectGlobal } from "@emotion/css";

injectGlobal`
  html, body, #__next {
    height: 100%;
  } 

  body {
    background: #29292b;
    color: #ccc;
    font-family: "Helvetica Neue",
      Arial,
      "Hiragino Kaku Gothic ProN",
      "Hiragino Sans",
      Meiryo,
      sans-serif;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
