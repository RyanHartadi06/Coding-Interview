'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetailTransactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transaction: {
        type: Sequelize.STRING
      },
      book: {
        type: Sequelize.INTEGER
      },
      titleBook: {
        type: Sequelize.STRING
      },
      authorBook: {
        type: Sequelize.STRING
      },
      imageBook: {
        type: Sequelize.STRING
      },
      priceBook: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DetailTransactions');
  }
};