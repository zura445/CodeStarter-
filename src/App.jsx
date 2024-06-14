import { useState } from "react";
import data from "./data.json";
function App() {
  const [count, setCount] = useState(0);

  const buttonsText = ["Small Business", "Medium Business", "Enterprise"];

  return (
    <>
      <div className="w-[1180px]">
        <h1 className="font-bold text-[64px] text-center">
          Easy Turn-Key Integration
        </h1>
        <p className="max-w-[779px] text-center mt-6 text-lg m-auto">
          Increase job satisfaction, improve engagement, decrease burnout and
          lower payroll liability by reimagining what employees can do with
          their PTO.
        </p>
        <div className="flex justify-center mt-[50px]">
          {buttonsText.map((btn, index) => (
            <button
              key={index}
              className="bg-purpleDark px-[18px] h-[38px] text-white font-bold text-xs flex items-center border border-white focus:outline-none focus:border-none"
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="mt-[69px] flex justify-center">
          <div className="">
            {data.boxesDataLeft.map((info, index) => (
              <div
                className={`flex justify-between border w-[280px] p-4 rounded-xl items-center ${
                  index === 0 ? "" : "mt-[20px]"
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
                    <p className="text-sm text-ink  leading-6">{info.title}</p>
                    <p className="text-sm text-ink text-center leading-6">
                      {info.description}
                    </p>
                  </div>
                </div>
                <label className="switch">
                  <input type="checkbox" checked />
                  <span className="slider round"></span>
                </label>
              </div>
            ))}
          </div>
          <div className="">
            <div className="w-[120px] flex">
              <div className="w-[60px] h-[80px] mt-10 border-t-2 border-r border-gray rounded-se-3xl"></div>
              <div className="w-[60px] h-[80px] mt-16 border-gray border-b-2 border-l rounded-bl-3xl"></div>
            </div>
            <div className="w-[120px] border-2 border-gray"></div>
            <div className="w-[120px] flex">
              <div className="w-[60px] h-[80px] border-b-2 border-r border-black rounded-br-3xl mt-6"></div>
              <div className="w-[60px] h-[80px] border-t-2 border-l border-black rounded-tl-3xl"></div>
            </div>
          </div>
          <div className="w-[380px] border-2 rounded-3xl p-10 relative">
            <img
              className="w-[86px] h-[86px] rounded-[10px] absolute -top-[48px] left-36"
              src="/images/woman.jpg"
              alt="woman"
            />
            <h2 className="text-center mt-[30px] text-lg font-bold">
              Lauren Robson
            </h2>
            <p className="text-sm text-ink text-center mt-[6px] leading-6">
              HR Director
            </p>
            <p className="text-center mt-5">
              “I want to lower PTO liability and keep my employess happy. I want
              to lower PTO liability.”
            </p>
          </div>
          <div className="w-[120px] bg-red-300"></div>
          <div className="">
            {data.boxesDataRight.map((info, index) => (
              <div
                className={`flex justify-between border w-[280px] p-4 rounded-xl items-center ${
                  index === 0 ? "" : "mt-[20px]"
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
                    <p className="text-sm text-ink  leading-6">{info.title}</p>
                    <p className="text-sm text-ink text-center leading-6">
                      {info.description}
                    </p>
                  </div>
                </div>
                <label className="switch">
                  <input type="checkbox" checked />
                  <span className="slider round"></span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
