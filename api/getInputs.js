import * as dotenv from "dotenv";
dotenv.config();

export const getInputs = async uri => {
  try {
    const data = await fetch(uri, {
      method: "GET",
      headers: {
        Cookie: `session=${process.env.AOC_SESSION}`,
      },
    });
    const inputs = await data.text();

    return inputs;
  } catch (error) {
    console.error("Error while fetching inputs:", error);
  }
};
