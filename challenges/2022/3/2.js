import { getInputs } from "../../../api/getInputs.js";
import { parseInputs } from "../../../utils/parseInputs.js";

getInputs("https://adventofcode.com/2022/day/3/input").then((inputs) => {
    // console.log("==== Inputs ====");
    // console.log(inputs)
    // console.log("================");

    const games = parseInputs(inputs);
});
