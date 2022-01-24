function welcomeMenu() {
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
}

function createAccountMenu() {
  console.log(`\t\t Create a account`);
  console.log(`\t\t ${"-".repeat(21)}`);
  console.log(`\n\t Please enter the following information:\t\n`);
  console.log(`\t 1. Full name
    \t 2. Email
    \t 3. Password`);
}

module.exports = {
  welcomeMenu,
  createAccountMenu,
};
