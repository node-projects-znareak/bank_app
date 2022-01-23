require("dotenv").config();
require("./mongodb")(app);

const inquirer = require("inquirer");
const UserModel = require("./models/User");

async function app() {
  console.clear();
  // segundo parametro, se filtra los campos que no se quieren mostrar con "-"
  // const user = await UserModel.find({}, "-_id -id -address -company").lean();
  // console.table(user);

  const COUNT_REPEAT = 21;
  console.log(`\t\t Bank of America times`);
  console.log(`\t\t ${"-".repeat(COUNT_REPEAT)}`);
  console.log(`\n\t Welcome to command line back, please enter an option:\t\n`);
  console.log(`\t 1. Create a account
  \t 2. Deposit
  \t 3. Withdraw
  \t 4. Transfer
  \t 5. Show balance
  \t 6. Show all accounts
  \t 7. Show all transactions
  \t 8. Show all transactions by account
  \t 9. Show all transactions by account and type
  \t 10. Show all transactions by account and type and date
  \t 11. Show all transactions by account and type and date and amount\t
  `);

  const op = await inquirer.prompt([
    {
      name: "option",
      type: "input",
      message: "\tPlease, choose a option",
    },
  ]);
  console.log(op.option);
}
