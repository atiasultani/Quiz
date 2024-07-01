#! /usr/bin/env node

// The app will show the students multiple choice questions and promt the user to reply.
// In the end it will show the students the result of the quiz.

import inquirer from "inquirer";
import chalk from "chalk";

console.log("\n")

const totalScore = 5;
let Score = 0;

let answer1 = await inquirer.prompt([
  {
    name: "question",
    type: "list",
    message: "Q1: How was the founder of Pakistan?",
    choices: ["A.) Muhammad Ali Jinnah", "B.) Liaquat Ali Khan", "C.) Allahma Iqbal"],
  },
]);
if (answer1.question === "A.) Muhammad Ali Jinnah") {
  console.log(chalk.green("Your answer is Right"));
 Score=Score+1; } else {
  console.log(chalk.red("Your answer is wrong"));}

console.log("\n")

let answer2 = await inquirer.prompt([
    {
      name: "question",
      type: "list",
      message: "Q2: Who was the first man in the world who took crown on his head?",
      choices: ["A.) Namrood ", "B.) Hazart Zulkarnain (A.S)", "C.) Firon"],
    },
  ]);
  if (answer2.question === "A.) Namrood ") {
    console.log(chalk.green("Your answer is Right"));
    Score=Score+1;} else {
    console.log(chalk.red("Your answer is wrong"));}

  console.log("\n")

  let answer3 = await inquirer.prompt([
    {
      name: "question",
      type: "list",
      message: "Q3: What is the longest river in the world?  ",
      choices: ["A.) Frhaat", "B.) Nile", "C.) ravi"],
    },
  ]);
  if (answer3.question === "B.) Nile") {
    console.log(chalk.green("Your answer is Right"));
    Score=Score+1;} else {
    console.log(chalk.red("Your answer is wrong"));}

  console.log("\n")

  let answer4 = await inquirer.prompt([
    {
      name: "question",
      type: "list",
      message: "Q4: What type of gas is absorbed by plants?",
      choices: ["A.) Oxygen", "B.) Nitrogen", "C.) Carbon dioxide"],
    },
  ]);
  if (answer4.question === "C.) Carbon dioxide") {
    console.log(chalk.green("Your answer is Right"));
    Score=Score+1;} else {
    console.log(chalk.red("Your answer is wrong"));}
    
  console.log("\n")
  let answer5 = await inquirer.prompt([
    {
      name: "question",
      type: "list",
      message: "Q5: How many bones are there in an adult human body?",
      choices: ["A.) 306", "B.) 206", "C.) 406"],
    },
  ]);
  if (answer5.question === "B.) 206") {
    console.log(chalk.green("Your answer is Right"));
    Score=Score+1;} else {
    console.log(chalk.red("Your answer is wrong"));
    }

    console.log("\n")

    console.log("***************************************************************************");

    console.log(chalk.yellowBright("Total Score = ")+ chalk.whiteBright(totalScore));
    console.log(chalk.yellowBright("Your Obtain Score is = ")+ chalk.blueBright(Score))