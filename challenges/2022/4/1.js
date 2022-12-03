import { getInputs } from "../../../api/getInputs.js";
import { parseInputs } from "../../../utils/parseInputs.js";

getInputs("https://adventofcode.com/2022/day/4/input").then(inputs => {
  const rucksacks = parseInputs(inputs);
});
