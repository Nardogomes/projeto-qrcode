import qr from "qrcode-terminal"
import chalk from "chalk"

export async function handle(err, result) {
  if(err) {
    console.error(chalk.bgRed.bold(`Error on application: ${err}`))
    return
  }

  const isSmall = result.type == 2

  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso:\n"))
    console.log(qrcode)
  })
}
