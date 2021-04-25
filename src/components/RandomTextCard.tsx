import React, { useEffect, useState } from "react";

export type GetRandomText = () => Promise<string>;

const RandomTextCard = ({
  getRandomText,
  onOk,
}: {
  getRandomText: GetRandomText;
  onOk: () => void;
}) => {
  const [text, setText] = useState("Loading ...");

  useEffect(() => {
    getRandomText()
      .then((randomText) => setText(randomText))
      .catch(() => setText("Error loading random text!"));
  }, [getRandomText]);

  return (
    <div className="w-full sm:w-80 p-10 bg-white sm:shadow-lg sm:rounded">
      <p className="min-h-16">{text}</p>
      <button
        type="button"
        className="justify-self-end mt-8 mx-auto block items-center px-5 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={onOk}
      >
        Ok
      </button>
    </div>
  );
};

export default RandomTextCard;
