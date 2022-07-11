const handleError = () => (err, req, res, next) => {
  console.log(
    `
/// ┌──────────────────────────────────────────────────────
/// │             APP ERROR LOG                            
/// │      ${err.stack}                                    
/// └──────────────────────────────────────────────────────
    `,
  );

  const statusCode = err.statusCode || 500;

  console.log(err.message);

  let customError = false;

  if (err.message.includes('SequelizeUniqueConstraintError:')) {
    customError = 'Đã có người đăng ký bằng email này, vui lòng thử email khác';
  }

  if (err.message.includes('SequelizeValidationError: Validation error:')) {
    customError = err.message.split('Validation error: ')[1];
  }

  return res.status(statusCode).json({
    message: customError ? customError : err.message,
  });
};

export default handleError;
