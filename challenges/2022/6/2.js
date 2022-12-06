import { getInputs } from "../../../api/getInputs.js";

getInputs("https://adventofcode.com/2022/day/6/input").then(data => {
  const areDifferent = arr => {
    const save = [];
    for (let i = 0; i < arr.length; i++) {
      if (save.includes(arr[i])) {
        return false;
      }
      save.push(arr[i]);
    }

    return true;
  };

  let i = 13;
  while (i < data.length) {
    if (areDifferent(data.slice(i - 13, i + 1))) {
      break;
    }
    i++;
  }

  console.log(i + 1);
});
