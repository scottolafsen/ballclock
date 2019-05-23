var inquirer = require("inquirer");
// importing ballclock function
var ballClock = require('./ballclock')

// Use inquirer for user input
function promptUser() {
    inquirer.prompt([
        {
            type: "input",
            name: "quantity",
            message: "Pick a number of balls between 27 and 127",
            validate: function (value) {
                if (isNaN(value) === false && value > 26 && value < 128) {
                    return true;
                }
                console.log(" !!!! Choose a valid number please!!!");
                return false;
            }
        }
    ])
        .then(function (answer) {
            var balls = parseInt(answer.quantity);
            ballClock(balls);
            postFunction();
        });
}
// User chooses to exit program or run function again
function postFunction() {
    inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "Would you like to play again or leave?",
            choices: ["play", "leave"]
        }
    ])
        .then(function (answer) {
            if (answer.choice === "leave") {
                console.log("\n Thanks for using my Ball Clock Problem app!")
                process.exit();
            }
            if (answer.choice === "play") {
                promptUser();
            }
        });
}
// starts main function on load
promptUser();

