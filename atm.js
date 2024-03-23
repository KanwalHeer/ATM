import inquirer from "inquirer";
import chalk from "chalk";
class ATM_MACHIENE {
    balance = 0;
    pin = 0;
    //START FUNCTION
    async startFunction() {
        let exit = false;
        do {
            const answer = await inquirer.prompt({
                name: "select",
                type: "list",
                message: "choose an action",
                choices: ["Login", "Exit"],
            });
            switch (answer.select) {
                case "Login":
                    await this.logIn();
                    break;
                case "Exit":
                    exit = true;
                    console.log(chalk.yellow(`You allways wellcome to come back again thank you!`));
                    break;
                default:
                    break;
            }
        } while (!exit);
    }
    /// start function completed
    //        LOGIN
    async logIn() {
        const loginProccess = await inquirer.prompt([
            {
                name: "pin",
                type: "number",
                message: "Enter Your Pin:",
            },
            {
                name: "loginOptions",
                type: "list",
                message: "choose your option:",
                choices: ["Deposit", "Withdrow", "check balance", "Exit"]
            },
        ]);
        switch (loginProccess.loginOptions) {
            case "Deposit":
                await this.deposit();
                break;
            case "Withdrow":
                await this.withdrow();
                break;
            case "check balance":
                await this.checkBalance();
                break;
            default:
                break;
        }
    }
    //login2 function completed
    //       DEPOSIT
    async deposit() {
        const depositProccess = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter Your amount to deposit:",
            },
        ]);
        const depositAmount = depositProccess.amount;
        this.balance += depositAmount;
        console.log(chalk.green(`successfully deposit RS${depositAmount} amount to your account`));
    }
    //deposit function completed
    //         WITHDROW
    async withdrow() {
        const withdrowProccess = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter Your amount to withdrow:",
            },
        ]);
        const withdrowAmount = withdrowProccess.amount;
        this.balance -= withdrowAmount;
        console.log(chalk.green(`successfully withdrow RS${withdrowAmount} amount from your account,`));
    }
    checkBalance() {
        console.log(chalk.magenta(`Your current balance is RS${this.balance}`));
    }
}
const atm = new ATM_MACHIENE();
atm.startFunction();
