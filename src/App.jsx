import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const buttonsText = ["Small Business", "Medium Business", "Enterprise"];

  return (
    <>
      <div className="">
        <h1 className="font-bold text-[64px] text-center">
          Easy Turn-Key Integration
        </h1>
        <p className="max-w-[779px] text-center mt-6 text-lg">
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
          <img src="/images/rame.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
