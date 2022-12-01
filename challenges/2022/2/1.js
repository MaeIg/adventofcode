import { getInputs } from "../../../api/getInputs.js";

getInputs("https://adventofcode.com/2022/day/2/input").then((inputs) => {
    // console.log("==== Inputs ====");
    // console.log(inputs)
    // console.log("================");

    const elves = inputs.split("\n\n").slice(0, -1);
    
    let sumedElves = elves.map((elf) => elf.split("\n").reduce((acc, cur) => acc + parseInt(cur), 0));

    sumedElves.sort((a, b) => b - a);

    console.log(sumedElves[0] + sumedElves[1] + sumedElves[2]);
});
