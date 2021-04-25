import React, { useEffect, useState } from "react";

export type GetRandomText = () => Promise<string>;

const RandomTextCard = ({
  getRandomText,
}: {
  getRandomText: GetRandomText;
}) => {
  const [text, setText] = useState("Loading ...");

  useEffect(() => {
    getRandomText()
      .then((randomText) => setText(randomText))
      .catch(() => setText("Error loading random text!"));
  }, [getRandomText]);

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default RandomTextCard;
