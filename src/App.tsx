import React, { useState } from "react";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import BoxesLeft from "./components/BoxesLeft";
import Connector from "./components/Connector";
import BoxesRight from "./components/BoxesRight";

const App: React.FC = () => {
  return (
    <>
      <div className="max-w-[1180px] p-6 lg:p-0">
        <Header />
        <Buttons />

        <div className="mt-[69px] flex justify-center">
          <BoxesLeft />
          <div className="lg:flex block">
            <Connector />
            <BoxesRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
