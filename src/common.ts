import log4js from 'log4js'

// 配置 log4js
log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: { type: 'file', filename: 'app.log' }
  },
  categories: {
    default: { appenders: ['console', 'file'], level: 'info' }
  }
});

export const logger = log4js.getLogger();
