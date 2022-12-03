import { getInputs } from "../../../api/getInputs.js";
import { parseInputs } from "../../../utils/parseInputs.js";

getInputs("https://adventofcode.com/2022/day/3/input").then(inputs => {
  const getRucksackCompartment = rucksack => {
    const a = rucksack.slice(0, rucksack.length / 2);
    const b = rucksack.slice(rucksack.length / 2);
    return [a, b];
  };

  const getCommonCharacters = (a, b) => {
    const commonCharacters = [];

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j] && !commonCharacters.includes(a[i])) {
          commonCharacters.push(a[i]);
        }
      }
    }

    return commonCharacters;
  };

  const getValue = char => {
    const isLowerCase = char === char.toLowerCase();
    return isLowerCase ? char.charCodeAt(0) - 96 : char.charCodeAt(0) - 38;
  };

  const rucksacks = parseInputs(inputs);

  const rucksacksValues = rucksacks.map(rucksack => {
    const [a, b] = getRucksackCompartment(rucksack);
    const commonCharacters = getCommonCharacters(a, b);

    const value = commonCharacters.reduce((acc, char) => {
      return acc + getValue(char);
    }, 0);

    return value;
  });

  const result = rucksacksValues.reduce((acc, value) => {
    return acc + value;
  }, 0);

  console.log(result);
});
