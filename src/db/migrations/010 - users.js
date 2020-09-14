'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable ('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      name:{
        type: Sequelize.DataTypes.STRING(255)
      },
      last_name:{
        type: Sequelize.DataTypes.STRING(255)
      },
      age: {
        type: Sequelize.DataTypes.DATE
      },
      telephone: {
        type: Sequelize.DataTypes.STRING(255)
      },
      adress:{
        type: Sequelize.DataTypes.STRING(255)
      },
      location: {
        type: Sequelize.DataTypes.STRING(255)
      },
      experiences: {
        type: Sequelize.DataTypes.STRING(255)
      },
      province: {
        type: Sequelize.DataTypes.STRING(255)
      },
      postal_code: {
        type: Sequelize.DataTypes.INTEGER(11)
      },
      genre_id: {
        type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        references: {
          model: 'genres',
          key: 'id'
        }
      },
      photo:{
        type: Sequelize.DataTypes.STRING(100)
      },
      rol:{
        type: Sequelize.DataTypes.INTEGER(10),
        allowNull: false
      },
      user_confirm:{
        type: Sequelize.DataTypes.INTEGER(10),
        allowNull: false
      },
      created_at: Sequelize.DataTypes.DATE,
      updated_at: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};