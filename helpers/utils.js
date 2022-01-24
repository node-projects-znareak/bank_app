const inquirer = require("inquirer");

async function readLine(message, type = "input") {
  const op = await inquirer.prompt([
    {
      name: "res",
      type,
      message,
    },
  ]);
  return op.res;
}

module.exports = {
  readLine,
};
