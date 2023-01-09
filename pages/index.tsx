import React, { useEffect, useRef, useState, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

import Layout from "@/src/components/Layout";
import RoomCard from "@/src/components/RoomCard";
import RoomSlider from "@/src/components/RoomSlider";

const Home = () => {
  const [page, setPage] = useState(1);
  const fetchRooms = async () => {
    setPage((page) => page + 1);
    return fetch(
      `https://63baddf632d17a50907fcc97.mockapi.io/rooms?p=${page}&l=8`
    ).then((res) => res.json());
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("rooms", fetchRooms);

  const handleOnDocumentBottom = useCallback(() => {
    fetchNextPage();
  }, []);

  useBottomScrollListener(handleOnDocumentBottom);

  return (
    <Layout>
      <RoomSlider />
      <div className="flex flex-wrap justify-between px-[40px] mx-[16px]">
        {data?.pages.map((page) => {
          return page.map(({ city, country, id }) => {
            return <RoomCard key={id} city={city} country={country} />;
          });
        })}
      </div>
    </Layout>
  );
};

export default Home;
