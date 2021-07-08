#!/usr/bin/env node
import { createCommand } from "./commands/create";
import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";

// This will eventually be used for ui stuff
// - yes, this was said 5 months ago...
const ui = new inquirer.ui.BottomBar();

console.log(
  chalk.red(
    figlet.textSync('Project Error',  { font: 'Standard', horizontalLayout: 'fitted' })
  ),
)

// Instantly Execs create command for testing
createCommand().then(() => {
  console.log('Complete')
})