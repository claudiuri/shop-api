
module.exports = {
  
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      seller: {
        type: Sequelize.STRING,
        allowNull: false
      },
      thumbnailHd: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.dropTable('products');
  }
};
