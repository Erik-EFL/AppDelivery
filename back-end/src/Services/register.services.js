const auth = require('./auth.services');
const user = require('./user.services');

const registerSevice = {
  register: async (body) => {
    const { password, ...userWithoutPassword } = await user.create(body);
    const token = auth.createToken(userWithoutPassword);
    return {
      user: {
        token,
        id: userWithoutPassword.id,
        name: userWithoutPassword.name,
        email: userWithoutPassword.email,
        role: userWithoutPassword.role,
      },
    };
  },
};

module.exports = registerSevice;
