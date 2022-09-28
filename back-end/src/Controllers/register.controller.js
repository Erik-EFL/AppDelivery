const service = require('../Services/register.services');

const registerController = {
  register: async (req, res) => {
    const token = await service.register(req.body);
    res.status(201).json({ token });
  },
};

module.exports = registerController;
