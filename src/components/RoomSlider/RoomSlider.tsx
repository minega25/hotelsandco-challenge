import React from "react";

interface Room {
  icon: string;
  name: string;
  path: string;
}

interface IProps {
  rooms: Room[];
}

function RoomSlider({ rooms }: IProps) {
  return (
    <div className="room-slider overflow-x-auto scroll-snap-type-x scroll-snap-type-mandatory">
      {rooms.map(({ icon, name, path }) => (
        <div
          key={name}
          className="room-slide scroll-snap-align-start px-4 py-2 bg-white rounded-lg shadow-lg"
        >
          <img
            src={icon}
            alt={name}
            className="h-48 w-full object-cover rounded-lg"
          />
          <h3 className="mt-2 font-bold text-lg">{name}</h3>
        </div>
      ))}
    </div>
  );
}

export default RoomSlider;

