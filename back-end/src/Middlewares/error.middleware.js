const errorMiddleware = (err, _req, res, _next) => {
  const { name, message } = err;

  switch (name) {
    case 'ValidationError':
      return res.status(400).json({ message });   

    case 'NotFoundError':
      return res.status(404).json({ message });
  }
}

module.exports = errorMiddleware;