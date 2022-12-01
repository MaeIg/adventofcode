import { getInputs } from "../../api/getInputs.js";

getInputs("https://adventofcode.com/2022/day/2/input").then((inputs) => {
    // console.log("==== Inputs ====");
    // console.log(inputs)
    // console.log("================");

    const elves = inputs.split("\n\n").slice(0, -1);
    
    const sumedElves = elves.map((elf) => elf.split("\n").reduce((acc, cur) => acc + parseInt(cur), 0));

    console.log(Math.max(...sumedElves));
});
