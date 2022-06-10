import AppError from './AppError';

const catchAsync = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            return next(new AppError(error, 404));
        }
    };
};

export default catchAsync;
