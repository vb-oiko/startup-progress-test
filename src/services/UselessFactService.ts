import { GetRandomText } from "../components/RandomTextCard";

export const getUselessFact: GetRandomText = async () =>
  new Promise(async (resolve, reject) => {
    const response = await fetch("https://uselessfacts.jsph.pl/random.json");
    if (response === undefined) {
      return reject();
    }

    const data = await response.json();
    if (data === undefined) {
      return reject();
    }

    const { text } = data;

    if (text === undefined) {
      return reject();
    }

    resolve(text);
  });
