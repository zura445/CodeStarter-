import React from "react";
import { useState, useEffect } from "react";
import data from "../data.json";
import Box from "./Box";

interface CheckedItems {
  left: { [key: number]: boolean };
  right: { [key: number]: boolean };
}

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

const appData: AppData = data;

interface BoxesRightProps {
  setToggles: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export default function BoxesRight({ setToggles }: BoxesRightProps) {
  const getLineClassRight = (index: number): string => {
    return checkedItems.right[index] ? "border-purpleDark" : "border-gray";
  };

  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    left: {},
    right: {},
  });

  useEffect(() => {
    const newToggles = Object.values(checkedItems.right);
    setToggles(newToggles);
  }, [checkedItems.right, setToggles]);

  const getBgClassRight = (index: number): string => {
    return checkedItems.right[index] ? "bg-purpleDark" : "bg-gray-200";
  };

  const handleCheckboxChange = (index: number) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      right: {
        ...prevState.right,
        [index]: !prevState.right[index],
      },
    }));
  };

  return (
    <div className="flex">
      <div className="w-[120px] lg:block hidden">
        <div className="flex relative">
          <div
            className={`w-[60px] h-[50px] mt-[90px] border-b-2 border-r-2 rounded-ee-3xl ${getLineClassRight(
              0
            )}`}
          ></div>
          <div
            className={`w-[60px] h-[50px] mt-[40px] border-t-2 border-l-2 rounded-ss-3xl absolute top-0 right-[2px] ${getLineClassRight(
              0
            )}`}
          ></div>
          <div
            className={`w-[2px] h-[2px] ml-[58px] mt-[40px] ${getBgClassRight(
              0
            )}`}
          ></div>
        </div>
        <div className={`w-[120px] border ${getLineClassRight(1)}`}></div>
        <div className="flex relative">
          <div
            className={`w-[60px] h-[50px] border-t-2 border-r-2 rounded-se-3xl ${getLineClassRight(
              2
            )}`}
          ></div>
          <div
            className={`w-[60px] h-[50px] mt-[50px] border-b-2 border-l-2 rounded-es-3xl absolute top-0 right-[2px] ${getLineClassRight(
              2
            )}`}
          ></div>
          <div
            className={`w-[2px] h-[2px] ml-[58px] mt-[98px] ${getBgClassRight(
              2
            )}`}
          ></div>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 w-full">
        {appData.boxesDataRight.map((info, index) => (
          <Box
            key={index}
            info={info}
            index={index}
            checked={checkedItems.right[index] || false}
            onChange={handleCheckboxChange}
          />
        ))}
      </div>
    </div>
  );
}
