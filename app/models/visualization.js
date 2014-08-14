module.exports = function(sequelize, DataTypes) {
  var Visualization = sequelize.define('Visualization', {
    data: 'JSON',
    name: DataTypes.STRING,
    images: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    classMethods: {
      associate: function(models) {
         // associations can be defined here
      }
    }
  })

  return Visualization;
}
