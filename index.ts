import { program } from "commander"
import { error, log, success } from "./utils/logger"
import { argbFromHex, themeFromSourceColor } from "@material/material-color-utilities"
import * as fs from "node:fs"
import { createCanvas } from "canvas"
import ThemeResource from "./res/constants"
import { createWriteStream } from "node:fs"
import { join } from "node:path"

const resSrc = "./res/theme/"

const colors = {
  gray: "#5A5A5E",
  gold: "#DECEBB",
  silver: "#D8D8D8",
  pink: "#DF4B87",
  blue: "#3C8894",
  red: "#D03E38",
}
const colorOptions = Object.keys(colors)

program
  .argument("<color>", colorOptions.join(" | "))
  .argument("[dest]", "folder path to hold firmware exports", "./build")
  .action(async (color: string, dest) => {
    color = color.toLowerCase()
    if (["all", ...colorOptions].indexOf(color) === -1) {
      error(`color '${color}' is not supported`)
      return
    }
    if (!fs.existsSync(dest)) {
      log(`folder '${dest}' not found, trying to make one...`)
      try {
        fs.mkdirSync(dest)
      } catch (e) {
        error("couldn't make folder")
        return
      }
    }
    if (color == "all") {
      for (let i = 0; i < colorOptions.length; i++) {
        if (i > 0) log()
        await makeResFromTheme(colorOptions[i], dest)
      }
      return
    }
    await makeResFromTheme(color, dest)
  })
program.parse()

async function makeResFromTheme(color: string, dest: string) {
  log(`generating resources for ${color} iPod...`)

  const outDir = join(dest, color)
  if (!fs.existsSync(outDir)) {
    try {
      fs.mkdirSync(outDir)
    } catch (e) {
      error(`couldn't make folder '${outDir}'`)
      return
    }
  }

  const theme = themeFromSourceColor(argbFromHex(colors[color]))
  let files = fs.readdirSync(resSrc)
  for (let i = 0; i < files.length; i++) {
    const res: ThemeResource = (await import(resSrc + files[i])).default
    console.log(`[${i + 1}/${files.length}] (${res.filename}) ${files[i]}`)

    const canvas = createCanvas(res.w, res.h)
    res.draw(canvas.getContext("2d"), theme)
    canvas.createPNGStream().pipe(createWriteStream(join(outDir, res.filename + ".png")))
  }

  success(`resources for ${color} iPod is done!`)
}
