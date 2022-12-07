import { getInputs } from "../../../api/getInputs.js";
import { parseInputs } from "../../../utils/parseInputs.js";

getInputs("https://adventofcode.com/2022/day/7/input").then(data => {
  const getNodeByPath = path => {
    let node = tree;

    path.forEach(name => {
      node = node.children[name];
    });

    return node;
  };

  const executeCommand = (node, input) => {
    const command = input.slice(2, 4);

    if (command === "ls") {
      return node;
    } else if (command === "cd") {
      const path = input.slice(5);
      if (path === "..") {
        return getNodeByPath(node.path.slice(0, -1));
      } else {
        return node.children[path];
      }
    } else {
      console.error("Unknown command: " + command);
    }
  };

  const addElement = (node, input) => {
    const [meta, name] = input.split(" ");

    if (meta === "dir") {
      node.children[name] = { children: [], path: [...node.path, name] };
    } else {
      node.children[name] = parseInt(meta, 10);
    }
  };

  const buildTree = (tree, inputs) => {
    let pointer = tree;

    inputs.forEach(input => {
      if (input[0] === "$") {
        pointer = executeCommand(pointer, input);
      } else {
        addElement(pointer, input);
      }
    });
  };

  const inputs = parseInputs(data);

  const tree = {
    children: {
      "/": { children: [], path: ["/"] },
    },
    path: [],
  };
  buildTree(tree, inputs);

  // console.dir(tree, { depth: null });

  // Array<{ path: string, size: number }>
  const directorySizes = [];

  const computeSizeRecursively = node => {
    if (typeof node === "number") {
      return node;
    }

    let size = 0;
    Object.values(node.children).forEach(child => {
      size += computeSizeRecursively(child);
    });

    directorySizes.push({ path: node.path.join("/"), size });
    return size;
  };

  computeSizeRecursively(tree.children["/"]);

  // console.log(directorySizes);

  const filterDirectoriesBySize = directories =>
    directories.filter(directory => directory.size <= 100000);

  const sumDirectorySizes = directories =>
    directories.reduce((acc, directory) => acc + directory.size, 0);

  const result = sumDirectorySizes(filterDirectoriesBySize(directorySizes));
  console.log(result);
});
