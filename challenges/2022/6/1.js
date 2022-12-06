import { getInputs } from "../../../api/getInputs.js";

getInputs("https://adventofcode.com/2022/day/6/input").then(data => {
  const areDifferent = arr => {
    const [a, b, c, d] = arr;
    return a !== b && a !== c && a !== d && b !== c && b !== d && c !== d;
  };

  let i = 3;
  while (i < data.length) {
    if (areDifferent(data.slice(i - 3, i + 1))) {
      break;
    }
    i++;
  }

  console.log(i + 1);
});
