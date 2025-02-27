import fs from "node:fs"

export function getAbi(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"))
}
