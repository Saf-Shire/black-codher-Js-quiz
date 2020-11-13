const { logger } = require("./modules/logger.js");
// require('console-stamp')(console, '[HH:MM:ss.l]');
require('log-timestamp');
logger.info("This is your first attempt");
logger.info("Second attempt made");

logger.write("Well done you have finished");
logger.write("You can now continue");