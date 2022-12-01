'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class States extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  States.init({
    name: DataTypes.STRING,
    visted: DataTypes.BOOLEAN,
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT,
    zoom: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'States',
  });
  return States;
};