import ThemeResource, { ICON_CONTAINER_HOVER_FILL, ICON_CONTAINER_R, ICON_W } from "../constants"
import { hexFromArgb } from "@material/material-color-utilities"

export default new ThemeResource("229442200_0064", ICON_W, ICON_W, (ctx, theme) => {
  ctx.arc(56, 52, ICON_CONTAINER_R, 0, 2 * Math.PI)
  ctx.fillStyle = ICON_CONTAINER_HOVER_FILL
  ctx.fill()
})
