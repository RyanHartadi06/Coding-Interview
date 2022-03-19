const {User} = require('../../db/models');

module.exports = {
  signin: async(req , res , next) => {
    try {
      const datauser = await User.findAll();
      res.status(200).json({data : datauser});
    } catch (error) {
      next(error)
    }
  }
}