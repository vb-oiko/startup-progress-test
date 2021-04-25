import React, { useState } from "react";
import "./App.css";
import ProgressPanel from "./components/ProgressPanel";
import RandomTextCard from "./components/RandomTextCard";
import LocalStorageProgressService from "./services/ProgressService";
import { getUselessFact } from "./services/UselessFactService";

function App() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="sm:grid sm:place-items-center w-screen h-screen sm:bg-gradient-to-r from-gray-200 to=gray-300">
      {completed ? (
        <RandomTextCard
          getRandomText={getUselessFact}
          onOk={() => {
            LocalStorageProgressService.initStartupProgress();
            setCompleted(false);
          }}
        />
      ) : (
        <ProgressPanel
          onComplete={() => setCompleted(true)}
          progressService={LocalStorageProgressService}
        />
      )}
    </div>
  );
}

export default App;
