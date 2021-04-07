import BaseError from "./BaseError";

class HabitError extends BaseError {
    constructor(msg) {
        super(msg);
    }
}

export default HabitError;