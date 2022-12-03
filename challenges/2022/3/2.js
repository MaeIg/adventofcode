import { getInputs } from "../../../api/getInputs.js";
import { parseInputs } from "../../../utils/parseInputs.js";

getInputs("https://adventofcode.com/2022/day/3/input").then(inputs => {
  const getCommonCharacters = (a, b, c) => {
    const commonCharacters = [];

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        for (let k = 0; k < c.length; k++) {
          if (a[i] === b[j] && b[j] === c[k] && !commonCharacters.includes(a[i])) {
            commonCharacters.push(a[i]);
          }
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

  let result = 0;
  for (let i = 0; i < rucksacks.length; i += 3) {
    const commonCharacters = getCommonCharacters(rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]);

    result += getValue(commonCharacters[0]);
  }

  console.log(result);
});
