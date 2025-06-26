import chalk from "chalk"

export const promptQrCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QRCode")
  },
  {
    name: "type",
    description: chalk.yellow("Escolha entre o tipo de QR Code 1) - Normal ou 2) - Teminal"),
    pattern: /^[1-2]+$/,
    message: chalk.bgRed.bold("Escolha apenas entre 1 e 2"),
    required: true
  }
]