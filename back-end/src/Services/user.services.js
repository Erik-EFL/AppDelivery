const { Op } = require('sequelize');
const md5 = require('md5');
const { user } = require('../database/models');
const NotFoundError = require('../Errors/NotFoundError');
const ConflictError = require('../Errors/ConflictError');

const UserNotFound = 'User not found';

const userService = {
  isSeller: async (id) => {
    const userFound = await user.findByPk(id);
    if (!userFound) throw new NotFoundError(UserNotFound);
    if (userFound.role === 'seller') return true;
    return false;
  },
  isAdmin: async (id) => {
    const adminFound = await user.findByPk(id);
    if (!adminFound) throw new NotFoundError('Admin not found');
    if (adminFound.role === 'administrator') return true;
    return false;
  },
  create: async (body) => {
    const { name, email } = body;
    // check if user already exists
    const userFound = await user.findOne({
      where: { [Op.or]: [{ name }, { email }] },
    });
    if (userFound) throw new ConflictError('User already registered');

    // hash password
    const hashedPassword = md5(body.password);

    // store a user
    const storedUser = await user
      .create({ name, email, password: hashedPassword, role: body.role || 'customer' });

    const { password, ...storedUserWithoutPassword } = storedUser.dataValues;

    return storedUserWithoutPassword;
  },
  getAll: async () => {
    const users = await user.findAll({
      attributes: ['id', 'name', 'email', 'role'],
      where: { role: { [Op.ne]: 'administrator' } },
    });
    return users;
  },

  getById: async (id) => {
    const userFound = await user.findByPk(id, {
      attributes: ['id', 'name', 'email', 'role'],
    });
    if (!userFound) throw new NotFoundError(UserNotFound);
    return userFound;
  },

  getUserByRole: async (role) => {
    const userFound = await user.findAll({
      attributes: ['id', 'name', 'email', 'role'],
      where: { role },
    });
    if (!userFound) throw new NotFoundError(UserNotFound);
    return userFound;
  },
};

module.exports = userService;
