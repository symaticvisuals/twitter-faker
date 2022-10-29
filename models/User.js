module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });

  User.assoicate = (models) => {
    User.hasMany(models.tweet, {
      foreignKey: "userId",
      as: "tweets",
    });
  };
  return User;
};
