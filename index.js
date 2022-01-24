require("dotenv").config();
require("./mongodb")(app);

const { welcomeMenu } = require("./helpers/menus");
const { readLine } = require("./helpers/utils");
const createAccount = require("./views/createAccount");
const UserModel = require("./models/User");

async function app() {
  let isRunning = true;
  // segundo parametro, se filtra los campos que no se quieren mostrar con "-"
  // const user = await UserModel.find({}, "-_id -id -address -company").lean();
  // console.table(user);


    console.clear();
    welcomeMenu();
    const res = await readLine("\tPlease, choose a option");
    console.clear();
    switch (res) {
      case "1":
        createAccount();

        break;
      default:
        console.log("\t Closing app...");
        isRunning = false;
    }
  
}
