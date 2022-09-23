const { user } = require('../database/models');
const NotFoundError = require('../Errors/NotFoundError');

const userService = {
    isSeller: async (id) => {
        const userFound = await user.findByPk(id);
        if (!userFound) throw new NotFoundError('User not found');
        if (userFound.role === 'seller') return true;
        return false;
    },
};

module.exports = userService;