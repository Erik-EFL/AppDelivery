const service = require('../Services/user.services');
const adminController = {
  async create(req, res) {
    const storedUser = service.create(req.body)

    return res.status(200).json(storedUser);
  },
};

module.exports = adminController;
