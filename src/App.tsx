import React, { useState } from "react";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import BoxesLeft from "./components/BoxesLeft";
import Connector from "./components/Connector";
import BoxesRight from "./components/BoxesRight";

const App: React.FC = () => {
  const [leftToggles, setLeftToggles] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const [rightToggles, setRightToggles] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  return (
    <>
      <div className="max-w-[1180px] p-6 lg:p-0">
        <Header />
        <Buttons />
        <div className="mt-[69px] flex justify-center">
          <BoxesLeft setToggles={setLeftToggles} />
          <div className="lg:flex block">
            <Connector leftToggles={leftToggles} rightToggles={rightToggles} />
            <BoxesRight setToggles={setRightToggles} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
