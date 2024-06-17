import React from "react";

export default function Connector() {
  return (
    <div>
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
          "I want to lower PTO liability and keep my employess happy. I want to
          lower PTO liability."
        </p>
      </div>
    </div>
  );
}
