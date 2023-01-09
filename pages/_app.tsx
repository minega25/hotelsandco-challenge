import React, { useState } from "react";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import "@/styles/global.css";

const circularFont = localFont({
  src: [
    {
      path: "../src/fonts/PlusJakartaSans-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../src/fonts/PlusJakartaSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../src/fonts/PlusJakartaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../src/fonts/PlusJakartaSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../src/fonts/PlusJakartaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../src/fonts/PlusJakartaSans-ExtraBold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <div className={circularFont.className}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </div>
  );
}
