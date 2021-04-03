class UnauthorizedError extends Error {
    constructor(msg) {
        super();
        this.msg = msg;
    }
}

export default UnauthorizedError;