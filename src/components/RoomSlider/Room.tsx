import * as React from "react";

interface IProps {
  name: string;
  img: string;
  isSelected: boolean;
  handleSelectionChange: () => void;
}

const Room = ({
  name,
  img,
  isSelected = false,
  handleSelectionChange,
}: IProps) => {
  return (
    <div
      className={`flex flex-col items-center border-black cursor-pointer pb-2 ${
        isSelected && "border-b-2"
      }`}
      onClick={handleSelectionChange}
    >
      <img className="h-7 w-7 mx-auto" src={img} alt={name} />
      <p className={`text-xxsm text-black ${isSelected && "font-bold"}`}>
        {name}
      </p>
    </div>
  );
};

export default Room;
