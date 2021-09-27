const log4js = require("log4js");

log4js.configure({
  appenders: {
    std: { type: "stdout", level: "all", layout: { type: "basic" } },
    file: { type: "file", filename: "log.txt", encoding: "utf-8" },
  },
  categories: {
    default: { appenders: ["std"], level: "info" },
    file: { appenders: ["std", "file"], level: "all" },
  },
});

const fileLogger = log4js.getLogger("file");
const consoleLogger = log4js.getLogger("default");

module.exports = consoleLogger;
