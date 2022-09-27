const md5 = require('md5');
const { Op } = require('sequelize');
const { user } = require('../database/models');
const ConflictError = require('../Errors/ConflictError');

const registerSevice = {
  register: async (body) => {
    const { name, password, email } = body;

    // check if user already exists
    const userFound = await user.findOne({
      where: {
        [Op.or]: [
          { name },
          { email },
        ],
      },
    });

    if (userFound) throw new ConflictError('User already registered');

    // hash password
    const hashedPassword = md5(password);

    // store a user
    const storedUser = await user
      .create({ name, email, password: hashedPassword, role: 'customer' });

    return storedUser;
  },
};

module.exports = registerSevice;
