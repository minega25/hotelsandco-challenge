import "@/styles/global.css";
import type { AppProps } from "next/app";

import localFont from "@next/font/local";
import React from "react";

const circularFont = localFont({
  src: "../src/fonts/CircularStd-Medium.woff2",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={circularFont.className}>
      <Component {...pageProps} />
    </div>
  );
}

