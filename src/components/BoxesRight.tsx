import React from "react";
import { useState } from "react";
import data from "../data.json";

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

export default function BoxesRight() {
  const getLineClassRight = (index: number): string => {
    return checkedItems.right[index] ? "border-purpleDark" : "border-gray";
  };

  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    left: {},
    right: {},
  });

  const getBgClassRight = (index: number): string => {
    return checkedItems.right[index] ? "bg-purpleDark" : "bg-gray-200";
  };

  const handleCheckboxChange = (side: "left" | "right", index: number) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [side]: {
        ...prevState[side],
        [index]: !prevState[side][index],
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
          <div
            className={`flex justify-between border lg:w-[280px] w-full p-4 rounded-xl items-center ${
              index === 0 ? "" : "mt-[20px]"
            } ${
              checkedItems.right[index] === true
                ? "border-purpleDark"
                : "border-gray"
            }`}
            key={index}
          >
            <div className="flex">
              <img className="w-12 h-12" src={info.imgSrc} alt={info.imgAlt} />
              <div className="ml-2">
                <p className="text-sm text-ink leading-6">{info.title}</p>
                <p className="text-sm text-ink text-center leading-6">
                  {info.description}
                </p>
              </div>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={checkedItems.right[index] || false}
                onChange={() => handleCheckboxChange("right", index)}
                aria-label={`Toggle checkbox for ${info.title}`}
              />
              <div
                className="relative w-[22px] h-[14px] bg-gray-200 rounded-full peer 
            peer-checked:after:translate-x-[8px] rtl:peer-checked:after:-translate-x-[8px]
            after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
            after:bg-white after:border-gray-300 after:border after:rounded-full 
            after:h-[10px] after:w-[10px] after:transition-all peer-checked:bg-blue-600
            focus:outline-none"
              ></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
