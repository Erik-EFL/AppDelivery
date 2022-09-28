const service = require('../Services/register.services');

const registerController = {
  register: async (req, res) => {
    const tokenAndUser = await service.register(req.body);
    res.status(201).json(tokenAndUser );
  },
};

module.exports = registerController;
