import React from "react";
import "./App.css";
import ProgressPanel from "./components/ProgressPanel";

function App() {
  return (
    <div className="grid place-items-center w-screen h-screen bg-gradient-to-r from-gray-200 to=gray-300">
      <ProgressPanel />
    </div>
  );
}

export default App;
