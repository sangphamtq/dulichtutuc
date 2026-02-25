import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const levelIcons = {
    error: '❌',
    warn: '⚠️ ',
    info: 'ℹ️ ',
    http: '🌐',
    debug: '🐛',
};

const addIconFormat = winston.format((info: winston.Logform.TransformableInfo) => {
    info.icon = levelIcons[info.level as keyof typeof levelIcons] || '';
    return info;
});

const logFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    addIconFormat(),
    winston.format.printf(({ timestamp, level, message, icon, ...meta }) => {
        let log = `${timestamp} ${icon} [${level}]: ${message}`;

        if (Object.keys(meta).length > 0) {
            log += ` ${JSON.stringify(meta)}`;
        }

        return log;
    }),
);

const logger = winston.createLogger({
    level: 'info',
    format: logFormat,
    transports: [
        new winston.transports.Console({
            level: 'debug',
            format: winston.format.combine(
                winston.format.timestamp({ format: 'HH:mm:ss' }),
                addIconFormat(),
                winston.format.colorize({ level: true }),
                logFormat,
            ),
            silent: process.env.NODE_ENV === 'production',
        }),

        new DailyRotateFile({
            filename: 'logs/application-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxSize: '20m',
            maxFiles: '30d',
        }),
    ],
});

export default logger;
