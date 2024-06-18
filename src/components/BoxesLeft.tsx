import React from "react";
import data from "../data.json";
import { useState } from "react";
import Box from "./Box";

interface BoxData {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

interface AppData {
  boxesDataLeft: BoxData[];
  boxesDataRight: BoxData[];
}

interface CheckedItems {
  left: { [key: number]: boolean };
  right: { [key: number]: boolean };
}

const appData: AppData = data;

export default function BoxesLeft() {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    left: {},
    right: {},
  });

  const handleCheckboxChange = (index: number) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      left: {
        ...prevState.left,
        [index]: !prevState.left[index],
      },
    }));
  };

  const getBgClass = (index: number): string => {
    return checkedItems.left[index] ? "bg-purpleDark" : "bg-gray-200";
  };

  const getLineClassLeft = (index: number): string => {
    return checkedItems.left[index] ? "border-purpleDark" : "border-gray";
  };

  return (
    <div className="flex">
      <div className="lg:block hidden">
        {appData.boxesDataLeft.map((info, index) => (
          <Box
            key={index}
            info={info}
            index={index}
            checked={checkedItems.left[index] || false}
            onChange={handleCheckboxChange}
          />
        ))}
      </div>
      <div className="lg:block hidden">
        <div className="w-[120px] flex relative">
          <div className={`w-[3px] h-[2px] mt-[40px] ${getBgClass(0)}`}></div>
          <div
            className={`w-[60px] h-[50px] mt-10 border-t-2 border-r-2 border-gray rounded-se-3xl absolute top-0 left-[3px] ${getLineClassLeft(
              0
            )}`}
          ></div>
          <div className="w-[60px] h-[50px]"></div>
          <div
            className={`w-[60px] h-[50px] mt-[90px] border-gray border-b-2 border-l-2 rounded-bl-3xl ${getLineClassLeft(
              0
            )}`}
          ></div>
        </div>
        <div className={`w-[120px] border ${getLineClassLeft(1)}`}></div>
        <div className="w-[120px] flex absolute">
          <div
            className={`w-[60px] h-[50px] border-b-2 border-r-2 relative left-[2px] top-[0px] rounded-br-3xl mt-[50px] ${getLineClassLeft(
              2
            )}`}
          ></div>
          <div
            className={`w-[60px] h-[50px] border-t-2 border-l-2 rounded-tl-3xl ${getLineClassLeft(
              2
            )}`}
          ></div>
        </div>
        <div className={`w-[2px] h-[2px] mt-[98px] ${getBgClass(2)}`}></div>
      </div>
    </div>
  );
}
