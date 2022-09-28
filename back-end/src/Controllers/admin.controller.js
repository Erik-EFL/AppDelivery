const service = require('../Services/user.services');

const adminController = {
  async create(req, res) {
    const storedUser = await service.create(req.body);
    return res.status(200).json(storedUser);
  },
  async getAll(_req, res) {
    const users = await service.getAll();
    console.log('me tira daqui');
    res.status(200).json(users);
  },
};

module.exports = adminController;
