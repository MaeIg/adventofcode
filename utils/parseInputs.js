export const parseInputs = (inputs, separator) => inputs.split(separator ?? "\n").slice(0, -1);
