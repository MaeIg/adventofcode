import { getInputs } from "../../../api/getInputs.js";
import { parseInputs } from "../../../utils/parseInputs.js";

getInputs("https://adventofcode.com/2022/day/7/input").then(data => {
  const inputs = parseInputs(data);
});
