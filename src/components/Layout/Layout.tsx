import React from "react";
import Head from "next/head";
import Header from "../Header";

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <>
      <Head>
        <title>Hotels & Co - Book Unique Hotels and Vacation Rentals</title>
        <meta
          name="description"
          content="Find and book unique hotels and vacation rentals on Hotels & Co. From cozy cabins to luxury villas, we have accommodations for every budget and style."
        />
        <meta name="keywords" content="hotels, rentals, Vacation" />
        <meta name="author" content="Patrick Minega" />
        <link rel="canonical" href="https://www.Hotels&co.com/page-name" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.Hotels&co.com/page-name" />
        <meta
          property="og:title"
          content="Book Unique Hotels and Vacation Rentals"
        />
        <meta
          property="og:description"
          content="Find and book unique hotels and vacation rentals on Hotels & Co. From cozy cabins to luxury villas, we have accommodations for every budget and style."
        />
        <meta
          property="og:image"
          content="https://www.Hotels&co.com/image.jpg"
        />
        <meta property="og:image:alt" content="Hotels&co" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@username" />
        <meta name="twitter:creator" content="@username" />
        <meta
          name="twitter:title"
          content="Book Unique Hotels and Vacation Rentals"
        />
        <meta
          name="twitter:description"
          content="Find and book unique hotels and vacation rentals on Hotels & Co. From cozy cabins to luxury villas, we have accommodations for every budget and style."
        />
        <meta
          name="twitter:image"
          content="https://www.Hotels&co.com/image.jpg"
        />
        <meta name="twitter:image:alt" content="Hotels&co" />
      </Head>
      <Header />
      <main className="container mx-auto px-10">{children}</main>
      {/* <footer>footer goes here...</footer> */}
    </>
  );
}

export default Layout;
