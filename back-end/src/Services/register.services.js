const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { user } = require('../database/models');
const ConflictError = require('../Errors/ConflictError');

const registerSevice = {
  register: async (body) => {
    const { name, password, email, role } = body;

    // check if user already exists
    const userFound = await user.findOne({
      where: {
        [Op.or]: [
          { name },
          { email },
        ],
      },
    });
    if (userFound) return new ConflictError('User already registered');

    // hash password
    const hashedPassword = md5(password);

    // store a user
    const storedUser = await user.create({ name, email, password: hashedPassword, role });

    return storedUser;
  },

  //  get userId from a token
  getUserId(token) {
    const { data } = jwt.decode(token);
    return data.id;
  },
};

module.exports = registerSevice;
