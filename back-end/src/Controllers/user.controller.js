const { getUserByRole } = require('../Services/user.services');
const saleService = require('../Services/user.services');

const userController = {
  getAllUsers: async (_req, res) => {
    const users = await saleService.getAll();
    return res.status(200).json(users);
  },

  findUserById: async (req, res) => {
    const profile = await saleService.getById(req.params.id);
    res.status(200).json(profile);
  },

  getUserByRole: async (req, res) => {
    const { role } = req.params;
    const users = await getUserByRole(role);
    res.status(200).json(users);
  }
};

module.exports = userController;
