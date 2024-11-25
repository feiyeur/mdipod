import ThemeResource, { ICON_CONTAINER_R, ICON_W, SHADOW } from "../constants"
import { hexFromArgb } from "@material/material-color-utilities"

export default new ThemeResource("229442202_1888", ICON_W, ICON_W, (ctx, theme) => {
  ctx.arc(56, 52, ICON_CONTAINER_R, 0, 2 * Math.PI)
  ctx.fillStyle = hexFromArgb(theme.schemes.light.primaryContainer)
  SHADOW(ctx)
  ctx.fill()
})
