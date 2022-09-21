const { user } = require('../database/models');
const { Op } = require("sequelize");
const md5 = require('md5');

const registerSevice = {
  register: async (body) => {
    const { name, password, email, role } = body;

    // check if user already exists
    const userFound = await user.findOne({
      where: {
        [Op.or]: [
          { name: name },
          { email: email },
        ],
      },
    });
    if (userFound) {
      const error = new Error('User already registered');
      error.name = 'Conflict';
      throw error;
    }

    // hash password
    const hashedPassword = md5(password);

    // store a user
    const storedUser = await user.create({ name, email, password: hashedPassword, role });

    return storedUser;

  }
}

module.exports = registerSevice;
