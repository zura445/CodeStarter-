import React from "react";

interface BoxData {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

interface BoxProps {
  info: BoxData;
  index: number;
  checked: boolean;
  onChange: (index: number) => void;
}

export default function Box({ info, index, checked, onChange }: BoxProps) {
  return (
    <div
      className={`flex justify-between border lg:w-[280px] p-4 rounded-xl items-center ${
        index === 0 ? "" : "mt-[20px]"
      } ${checked ? "border-purpleDark" : "border-gray"}`}
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
          checked={checked}
          onChange={() => onChange(index)}
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
  );
}
