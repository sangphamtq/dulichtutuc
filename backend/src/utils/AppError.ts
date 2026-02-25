export default class AppError extends Error {
    public statusCode: number;
    public isOperational: boolean;
    public errorCode?: string;

    constructor(message: string, statusCode: number, errorCode: string) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.isOperational = true;
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
