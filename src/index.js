import prompt from "prompt"
import chalk from "chalk"
import { mainPrompt } from "./prompts/prompt-main.js"
import { createQrcode } from "./services/qr-code/create.js"

async function main() {
  prompt.get(mainPrompt, async (err, choose) => {
    if(choose.select == 1) {
      await createQrcode()
    }

    if(choose.select == 2) {
      console.log(chalk.bgGreen.bold("Escolheu o password."))
    }
  })

  prompt.start()
}

main()
