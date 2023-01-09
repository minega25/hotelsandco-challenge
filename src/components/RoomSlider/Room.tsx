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
      <img className="h-6 w-6 mx-auto mb-1" src={img} alt={name} />
      <p
        className={`text-xs pb-1 text-gray-600 ${
          isSelected ? "font-semibold text-gray-800" : "font-normal"
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default Room;
