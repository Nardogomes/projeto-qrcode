import prompt from "prompt"
import { SchemaQrCode } from "../../prompts-schema/schema-qrcode.js"
import { handle } from "./handle.js"

export async function createQrcode() {
  prompt.get(SchemaQrCode, handle)

  prompt.start()
}
