import React, { useState } from "react";
import { StartupStep } from "../services/ProgressService";
import { stringToKebab } from "../utils";
import cx from "classnames";

const ProgressStep = ({
  index,
  step,
  disabled,
  onChange,
}: {
  index: number;
  step: StartupStep;
  disabled: boolean;
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
          disabled={disabled}
          className={cx(
            "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded",
            {
              "cursor-pointer": !disabled,
            }
          )}
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
          className={cx("font-medium text-gray-800 select-none ", {
            "text-gray-600": disabled,
            "text-gray-800 cursor-pointer": !disabled,
          })}
        >
          {step.name}
        </label>
      </div>
    </div>
  );
};

export default ProgressStep;
