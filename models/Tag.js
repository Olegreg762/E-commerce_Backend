// Import modules
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
// Initialize Tag model by extending model
class Tag extends Model {}
//  Sets up fields and rules for the model
Tag.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name:{
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
