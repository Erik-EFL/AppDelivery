const loginServices = require('../Services/login.servives');


const loginController = {
  async login(req, res) {
    const body = loginServices.validateBody(req.body);
    const token = await loginServices.login(body);

    return res.status(200).json(token);
  },
};

module.exports = loginController;