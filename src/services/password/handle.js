async function permittedCharacters() {
  let permitted = []

  if(process.env.UPPERCASE_LETTERS) {
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  }

  if(process.env.LOWCASE_LETTERS) {
    permitted.push(..."abcdefghijklmnopqrstuvwxyz")
  }

  if(process.env.NUMBERS) {
    permitted.push(..."0123456789")
  }

  if(process.env.SPECIAL_CHARACTERS) {
    permitted.push(..."!@#$%&*+")
  }

  return permitted
}

export async function handle() {
  let characters = []
  let password = ""

  const passwordLength = process.env.PASSWORD_LENGTH
  
  characters = await permittedCharacters()

  for(let i = 0; i > passwordLength; i++) {
    const index = Math.floor(Math.random() + characters.length)
    password += characters[index]

    return password
  }
}
