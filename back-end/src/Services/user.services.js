const { user } = require('../database/models');
const NotFoundError = require('../Errors/NotFoundError');

const userService = {
  isSeller: async (id) => {
    const userFound = await user.findByPk(id);
    if (!userFound) throw new NotFoundError('User not found');
    if (userFound.role === 'seller') return true;
    return false;
  },
  create: async (body) => {
    const { name, password, email, role = 'customer' } = body;
    // check if user already exists
    const userFound = await user.findOne({
      where: { [Op.or]: [{ name }, { email }] },
    });
    if (userFound) throw new ConflictError('User already registered');

    // hash password
    const hashedPassword = md5(password);

    // store a user
    const storedUser = await user
      .create({ name, email, password: hashedPassword, role });

    return storedUser;
  }

};

module.exports = userService;
