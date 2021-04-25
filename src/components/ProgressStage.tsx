import React from "react";
import { StartupStage } from "../services/ProgressService";
import TickIcon from "./TickIcon";

const ProgressPanel = ({
  index,
  stage,
}: {
  index: number;
  stage: StartupStage;
}) => {
  return (
    <li className="flex mt-5 mb-4">
      <span className="text-white text-sm font-semibold bg-gray-900 w-7 h-7 rounded-full inline-flex items-center justify-center">
        {index + 1}
      </span>
      <span className="text-xl font-bold ml-3 mr-auto">{stage.name}</span>
      <TickIcon />
    </li>
  );
};

export default ProgressPanel;
