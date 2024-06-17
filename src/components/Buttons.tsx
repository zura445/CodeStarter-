import React from "react";
import { useState } from "react";

export default function Buttons() {
  const buttonsText = ["Small Business", "Medium Business", "Enterprise"];

  const defaultButtonIndex = buttonsText.indexOf("Small Business");

  const [selectedButton, setSelectedButton] = useState(defaultButtonIndex);

  return (
    <div>
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
    </div>
  );
}
