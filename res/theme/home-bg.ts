import ThemeResource, { BG_H, BG_W } from "../constants"
import { hexFromArgb } from "@material/material-color-utilities"

export default new ThemeResource("229442217_0064", BG_W, BG_H, (ctx, theme) => {
  ctx.fillStyle = hexFromArgb(theme.schemes.light.primary)
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
})
