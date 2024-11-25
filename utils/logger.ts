import chalk from "chalk"

export const log = (...args: any[]) => console.log(...args)
export const warn = (...args: any[]) => console.warn(chalk.yellow("warn:"), ...args)
export const error = (...args: any[]) => console.error(chalk.red("error:"), ...args)
export const success = (...args: any[]) => console.error(chalk.green("success:"), ...args)
