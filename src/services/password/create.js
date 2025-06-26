import chalk from "chalk";
import { handle } from "./handle.js";

export async function createPassword() {
  console.log(chalk.bgGreen("password"))

  const password = await handle()

  console.log(password)
}