export const mainPrompt = [
  {
    name: "select",
    description: "Escolha a ferramenta (1 - Gerar QrCode ou 2 - Gerar senha)",
    pattern: /^[1-2]+$/,
    message: "Escolha apenas entre 1 e 2",
    required: true
  }
]