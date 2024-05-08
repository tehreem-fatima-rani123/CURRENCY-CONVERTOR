#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold("\n \t WELCOME TO SALEEM - CURRENCY CONVERTOR\n"));

let exchange_rate: any ={
    "USD": 1,
    "PKR": 277.70,
    "EUR":0.9,
    "JYP":113,
    "CAD" :1.3,
    "AUD": 1.65,

};
let user_answer = await inquirer.prompt(
    [
        {
            name:"from_currency",
            message:"SELECT THE CURRENCY TO CONVERTOR FROM",
            type:"list",
            choices:["USD","PKR","EUR","JYP","CAD","AUD"],

        },
    {
        name:"to_currency",
        message: "SELECT THE CURRENCY TO CONVERTOR INTO:",
        type:"list",
        choices: ["USD","PKR","EUR","JYP","CAD","AUD"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",
    },
    ]
    );



    let from_amount = exchange_rate[user_answer.from_currency];
    let to_amount = exchange_rate[user_answer.to_currency];
    let amount = user_answer.amount

    let base_amount = amount / from_amount
    let converted_amount = base_amount * to_amount


    console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);


    