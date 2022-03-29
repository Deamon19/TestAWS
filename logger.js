const log = require('loglevel');

// const prefix = require('loglevel-plugin-prefix')
// prefix.reg(log);

const logger = {
  trace: (message, ...optionalParams) => log.trace(message, ...optionalParams),
  debug: (message, ...optionalParams) => log.debug(message, ...optionalParams),
  info: (message, ...optionalParams) => log.info(message, ...optionalParams),
  warn: (message, ...optionalParams) => log.warn(message, ...optionalParams),
  error: (message, ...optionalParams) => log.error(message, ...optionalParams)
};

// prefix.apply(log.getLogger('critical'), {
//   format(level, name, timestamp) {
//     return chalk.red.bold(`[${timestamp}] ${level} ${name}:`)
//   }
// })
(() => log.setLevel('DEBUG'))()
// prefix.apply(log, {
//   format(level) {
//     return level
//   },
// });
module.exports = {
  logger
}
