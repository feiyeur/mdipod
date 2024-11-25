import { Theme } from "@material/material-color-utilities"
import { CanvasRenderingContext2D } from "canvas"

export default class ThemeResource {
  filename: string
  w: number
  h: number
  draw: (ctx: CanvasRenderingContext2D, theme: Theme) => void
  constructor(
    filename: string,
    w: number,
    h: number,
    draw: (ctx: CanvasRenderingContext2D, theme: Theme) => void,
  ) {
    this.filename = filename
    this.w = w
    this.h = h
    this.draw = draw
  }
}

export const SHADOW = (ctx: CanvasRenderingContext2D) => {
  ctx.shadowColor = "rgba(0,0,0,0.20)"
  ctx.shadowBlur = 12
  ctx.shadowOffsetY = 6
}
export const BG_W = 240
export const BG_H = 432
export const BG_THUMB_W = 117
export const BG_THUMB_H = 200
export const ICON_W = 112
export const ICON_CONTAINER_R = 44
export const ICON_CONTAINER_HOVER_FILL = "rgba(0,0,0,0.5)"
