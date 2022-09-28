const auth = require('../Services/auth.services');
const service = require('../Services/register.services');

const registerController = {
  register: async (req, res) => {
    const storedUser = await service.register(req.body);

    const { password, ...userWithoutPassword } = storedUser;

    const token = auth.createToken(userWithoutPassword);
    res.status(201).json({
      user: {
        token,
        id: storedUser.id,
        name: storedUser.name,
        email: storedUser.email,
        role: storedUser.role,
      }
    });
  },
};

module.exports = registerController;
