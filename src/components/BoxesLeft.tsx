import React from "react";
import data from "../data.json";
import { useState } from "react";

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

  const handleCheckboxChange = (side: "left" | "right", index: number) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [side]: {
        ...prevState[side],
        [index]: !prevState[side][index],
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
          <div
            className={`flex justify-between border w-[280px] p-4 rounded-xl items-center ${
              index === 0 ? "" : "mt-[20px]"
            } ${
              checkedItems.left[index] === true
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
                checked={checkedItems.left[index] || false}
                onChange={() => handleCheckboxChange("left", index)}
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
