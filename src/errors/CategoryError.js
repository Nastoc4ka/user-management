import BaseError from "./BaseError";

class CategoryError extends BaseError {
    constructor(msg) {
        super(msg);
    }
}

export default CategoryError;