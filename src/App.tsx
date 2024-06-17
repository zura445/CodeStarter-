import React, { useState } from "react";
import data from "./data.json";

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

const App: React.FC = () => {
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

  const getLineClassLeft = (index: number): string => {
    return checkedItems.left[index] ? "border-purpleDark" : "border-gray";
  };

  const getBgClass = (index: number): string => {
    return checkedItems.left[index] ? "bg-purpleDark" : "bg-gray-200";
  };

  const getLineClassRight = (index: number): string => {
    return checkedItems.right[index] ? "border-purpleDark" : "border-gray";
  };

  const getBgClassRight = (index: number): string => {
    return checkedItems.right[index] ? "bg-purpleDark" : "bg-gray-200";
  };

  const buttonsText = ["Small Business", "Medium Business", "Enterprise"];
  const defaultButtonIndex = buttonsText.indexOf("Small Business");
  const [selectedButton, setSelectedButton] = useState(defaultButtonIndex);

  return (
    <>
      <div className="max-w-[1180px] p-6 lg:p-0">
        <h1 className="font-bold md:text-[64px] text-[40px] text-center">
          Easy Turn-Key Integration
        </h1>
        <p className="md:max-w-[779px] w-full text-center mt-6 text-lg m-auto">
          Increase job satisfaction, improve engagement, decrease burnout and
          lower payroll liability by reimagining what employees can do with
          their PTO.
        </p>
        <div className="flex justify-center mt-[50px] overflow-x-auto scrollbar-hide">
          {buttonsText.map((btn, index) => (
            <button
              key={index}
              className={`
                px-[18px] h-[38px] font-bold text-xs flex items-center focus:outline-none ml-2 box-border flex-shrink-0
                border-b-2 border-x-0 border-t-0 lg:border-2 lg:border-b-2
                ${
                  selectedButton === index
                    ? "lg:bg-purpleDark lg:text-white text-purpleDark bg-white lg:hover:bg-blue-500 lg:border-purpleDark border-purpleDark rounded-none lg:rounded-lg"
                    : "text-darkInk hover:text-blue-500 lg:border-purpleDark lg:hover:border-blue-500 border-transparent hover:border-blue-500 rounded-none lg:rounded-lg"
                }
              `}
              onClick={() => setSelectedButton(index)}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="mt-[69px] flex justify-center">
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
                  <img
                    className="w-12 h-12"
                    src={info.imgSrc}
                    alt={info.imgAlt}
                  />
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
              <div
                className={`w-[3px] h-[2px] mt-[40px] ${getBgClass(0)}`}
              ></div>
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
          <div className="lg:flex block">
            <div className="w-full border-2 rounded-3xl p-10 relative bg-lightGray">
              <div className="absolute -top-[34px] left-1/2 transform -translate-x-1/2">
                <img
                  className="w-[86px] h-[86px] rounded-[10px]"
                  src="/images/woman.jpg"
                  alt="woman"
                />
              </div>
              <h2 className="text-center mt-[30px] text-lg font-bold">
                Lauren Robson
              </h2>
              <p className="text-sm text-ink text-center mt-[6px] leading-6">
                HR Director
              </p>
              <p className="text-center mt-5">
                "I want to lower PTO liability and keep my employess happy. I
                want to lower PTO liability."
              </p>
            </div>
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

            <div className="mt-10 lg:mt-0">
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
                    <img
                      className="w-12 h-12"
                      src={info.imgSrc}
                      alt={info.imgAlt}
                    />
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
        </div>
      </div>
    </>
  );
};

export default App;
