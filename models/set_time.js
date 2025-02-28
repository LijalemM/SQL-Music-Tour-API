'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Set_time.init({
    set_time_id:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
    }, 
    events_id: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
    stage_id:{
    type: DataTypes.INTEGER,
    allowNull: false
    },
     
    band_id: {
    type:DataTypes.INTEGER,
    allowNull: false
    },
    start_time: { 
    type:DataTypes.TIME,
    allowNull: false
    },
    end_time: {
    type:DataTypes.TIME,
    allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Set_time',
    tableName: 'set_time',
    timestamps: false
  });
  return Set_time;
};