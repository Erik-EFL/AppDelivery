const auth = require('./auth.services');
const user = require('./user.services');

const registerSevice = {
  register: async (body) => {
    const { password, ...userWithoutPassword } = await user.create(body);
    const token = auth.createToken(userWithoutPassword);
    return token;
  },
};

module.exports = registerSevice;
