const S = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class SuperUser extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  async validatePassword(loginPassword) {
    const hashed = await this.hash(loginPassword, this.salt);
    return hashed === this.password;
  }
}

SuperUser.init(
  {
    id: {
      type: S.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
      },
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    isadmin: {
      type: S.BOOLEAN,
      defaultValue: true,
    },
    salt: {
      type: S.STRING,
    },
    isresseller: {
      type: S.BOOLEAN,
      defaultValue: true,
    },
  },
  { sequelize: db, modelName: "superadmins", timestamps: false }
);

SuperUser.beforeCreate(async (user) => {
  user.salt = await bcrypt.genSalt(10);
  user.password = await user.hash(user.password, user.salt);
});

module.exports = SuperUser;
