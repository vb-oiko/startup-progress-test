import React from "react";
import { StartupStage } from "../services/ProgressService";
import ProgressStep from "./ProgressStep";
import TickIcon from "./TickIcon";

const ProgressPanel = ({
  index,
  stage,
  onChange,
}: {
  index: number;
  stage: StartupStage;
  onChange: (index: number, stage: StartupStage) => void;
}) => {
  const onStepChange = (index: number, value: boolean) => {
    const { name, steps } = stage;
    steps[index].completed = value;
    const newStage = { name, steps };
    onChange(index, newStage);
  };

  return (
    <li>
      <div className="flex mt-5 mb-4">
        <span className="text-white text-sm font-semibold bg-gray-900 w-7 h-7 rounded-full inline-flex items-center justify-center select-none">
          {index + 1}
        </span>
        <span className="text-xl font-bold ml-3 mr-auto select-none">
          {stage.name}
        </span>
        <TickIcon />
      </div>
      <ul className="space-y-2">
        {stage.steps.map((step, index) => (
          <li key={`step-${index}`}>
            <ProgressStep index={index} step={step} onChange={onStepChange} />
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ProgressPanel;
