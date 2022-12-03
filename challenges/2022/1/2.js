import { getInputs } from "../../../api/getInputs.js";
import { parseInputs } from "../../../utils/parseInputs.js";

getInputs("https://adventofcode.com/2022/day/1/input").then(inputs => {
  // console.log("==== Inputs ====");
  // console.log(inputs)
  // console.log("================");

  const elves = parseInputs(inputs, "\n\n");

  let sumedElves = elves.map(elf => elf.split("\n").reduce((acc, cur) => acc + parseInt(cur), 0));

  sumedElves.sort((a, b) => b - a);

  console.log(sumedElves[0] + sumedElves[1] + sumedElves[2]);
});
