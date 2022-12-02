import { getInputs } from "../../../api/getInputs.js";

getInputs("https://adventofcode.com/2022/day/2/input").then((inputs) => {
    // console.log("==== Inputs ====");
    // console.log(inputs)
    // console.log("================");

    // A < B < C < A
    // X < Y < Z < X

    const mapping = {
        "X": 1,
        "Y": 2,
        "Z": 3,
    };

    const getResultScore = (a, b) => {
        if (a === "A") {
            if (b === "X") return 3;
            if (b === "Y") return 6;
            if (b === "Z") return 0;
        }
        if (a === "B") {
            if (b === "X") return 0;
            if (b === "Y") return 3;
            if (b === "Z") return 6;
        }
        if (a === "C") {
            if (b === "X") return 6;
            if (b === "Y") return 0;
            if (b === "Z") return 3;
        }
    }

    const games = inputs.split("\n").slice(0, -1);

    const total = games.reduce((acc, cur) => {
        const [a, b] = cur.split(" ");

        const value = mapping[b];
        const result = getResultScore(a, b);

        return acc + value + result;
    }, 0);
    
    console.log(total);
});
