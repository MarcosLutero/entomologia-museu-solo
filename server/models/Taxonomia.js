module.exports = (sequelize, DataTypes) => {
  const Taxonomia = sequelize.define("Taxonomia", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taxonomia_id: {
       type: DataTypes.INTEGER,
       allowNull: true
    }
  });

  return Taxonomia;
};
