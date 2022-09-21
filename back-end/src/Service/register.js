const { User } = require('../database/models');
const { Op } = require("sequelize");
const md5 = require('md5');

const registerSevice = {
  register: async (body) => {

    const { name, password, email, role } = body;

    // check if user already exists
    const userFound = await User.findOne({
      where: {
        [Op.or]: [
          { name },
          { email },
        ],
      },
    });
    if (userFound) {
      const error = new Error('User already registered');
      error.name = 'Conflict';
      throw error;
    }

    // hash password
    const passwordHashed = md5(password);

    // store a user
    const storedUser = await User.create({ name, email, password: passwordHashed, role });

    return storedUser;

  }
}

module.exports = registerSevice;
