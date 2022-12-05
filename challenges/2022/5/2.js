import { getInputs } from "../../../api/getInputs.js";
import { parseInputs } from "../../../utils/parseInputs.js";

getInputs("https://adventofcode.com/2022/day/5/input").then(data => {
  // Stacks is like array with rows and columns reversed and without spaces
  const convertArrayToStacks = input => {
    const stack = [];

    for (let i = 0; i < input[0].length; i++) {
      stack.push([]);

      for (let j = 0; j < input.length; j++) {
        stack[i].push(input[j][i]);
      }

      stack[i] = stack[i].filter(item => item !== " ");
    }

    return stack;
  };

  const parseMove = move => move.match(/\d+/g).map(Number);

  const playMove = (stacks, move) => {
    const [n, from, to] = move;

    const temp = [];
    for (let i = 0; i < n; i++) {
      temp.push(stacks[from - 1].pop());
    }
    for (let i = 0; i < n; i++) {
      stacks[to - 1].push(temp.pop());
    }
  };

  const buildSolution = stacks => stacks.reduce((acc, stack) => acc + stack[stack.length - 1], "");

  const inputs = parseInputs(data);

  // Convert [["[a] [b] [c]"]] to [["a", "b", "c"]]
  const map = inputs
    .slice(0, 8)
    .reverse()
    .map(line => {
      const newLine = [];

      let i = 1;
      while (i < line.length) {
        newLine.push(line[i]);
        i += 4;
      }

      return newLine;
    });

  const moves = inputs.slice(10);

  const stacks = convertArrayToStacks(map);

  moves.forEach(move => {
    playMove(stacks, parseMove(move));
  });

  console.log(buildSolution(stacks));
});
