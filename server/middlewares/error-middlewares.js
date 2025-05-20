const errorMiddlewares = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Backend Server Error';
    const exteraDetails = err.exteraDetails || 'Backend Server Error';
    return res.status(statusCode).json({ message, exteraDetails });
}
module.exports = errorMiddlewares
