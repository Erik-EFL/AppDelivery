const service = require('../Service/register');

const registerController = {
  register: async (req, res) => {
    const storedUser = await service.register(req.body);
    res.status(201).json(storedUser);
  },
};

module.exports = registerController;
