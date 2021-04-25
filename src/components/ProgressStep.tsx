import React, { useState } from "react";
import { StartupStep } from "../services/ProgressService";
import { stringToKebab } from "../utils";

const ProgressStep = ({
  index,
  step,
  onChange,
}: {
  index: number;
  step: StartupStep;
  onChange: (index: number, value: boolean) => void;
}) => {
  const id = `checkbox-${stringToKebab(step.name)}`;

  const [checked, setChecked] = useState(step.completed);

  return (
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded cursor-pointer"
          onChange={(ev) => {
            const { checked } = ev.target;
            setChecked(checked);
            onChange(index, checked);
          }}
        />
      </div>
      <div className="ml-3 text-sm">
        <label
          htmlFor={id}
          className="font-medium text-gray-800 select-none cursor-pointer"
        >
          {step.name}
        </label>
      </div>
    </div>
  );
};

export default ProgressStep;
