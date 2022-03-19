'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    const passwordhash = bcrypt.hashSync('admin' , 10);
     await queryInterface.bulkInsert('users', 
     [
      {
       name: 'John Doe',
       email: 'admin@admin.com',
       password: passwordhash,
       createdAt: new Date(),
       updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
