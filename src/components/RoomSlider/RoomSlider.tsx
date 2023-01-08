import React, { useState } from "react";

import Room from "./Room";
import rooms from "src/data/rooms";

function RoomSlider() {
  const [currentSlide, setCurrentSlide] = useState("Chalets");

  const handleSelectionChange = (name: string) => {
    setCurrentSlide(name);
  };

  return (
    <div className="border-gray-200 flex flex-row justify-between px-10 mt-4 shadow-md">
      {rooms.map(({ img, name }) => (
        <Room
          handleSelectionChange={() => handleSelectionChange(name)}
          name={name}
          img={img}
          key={name}
          isSelected={currentSlide === name}
        />
      ))}
    </div>
  );
}

export default RoomSlider;
