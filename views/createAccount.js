const { createAccountMenu } = require("../helpers/menus");
const inquirer = require("inquirer");

module.exports = async function () {
  createAccountMenu();

  const op = await inquirer.prompt([
    {
      name: "fullname",
      type: "input",
      message: "`\t Enter your full name`",
    },
    {
      name: "email",
      type: "input",
      message: "`\t Enter your email`",
    },
    {
      name: "password",
      type: "input",
      message: "`\t Enter your password`",
    },
  ]);
  
};
