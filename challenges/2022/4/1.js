import { getInputs } from "../../../api/getInputs.js";
import { parseInputs } from "../../../utils/parseInputs.js";

getInputs("https://adventofcode.com/2022/day/4/input").then(inputs => {
  const isFullyContained = (a, b) => {
    const a1 = Number(a[0]);
    const a2 = Number(a[1]);
    const b1 = Number(b[0]);
    const b2 = Number(b[1]);

    return a1 >= b1 && a2 <= b2;
  };

  const isFullyContainedDoubleCheck = (a, b) => {
    return isFullyContained(a, b) || isFullyContained(b, a);
  };

  const pairs = parseInputs(inputs).map(pair => pair.split(",").map(n => n.split("-")));

  const result = pairs.reduce((acc, pair) => {
    return isFullyContainedDoubleCheck(pair[0], pair[1]) ? acc + 1 : acc;
  }, 0);

  console.log(result);
});
