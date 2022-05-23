const S = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class Kiosko extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  async validatePassword(loginPassword) {
    const hashed = await this.hash(loginPassword, this.salt);
    return hashed === this.password;
  }
}

Kiosko.init(
  {
    id: {
      type: S.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    salt: {
      type: S.STRING,
    },
    isadmin: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
    isresseller: {
      type: S.BOOLEAN,
      defaultValue: true,
    },
  },
  { sequelize: db, modelName: "kioskos", timestamps: false  }
);

Kiosko.beforeCreate(async (kiosko) => {
  kiosko.salt = await bcrypt.genSalt(10);
  kiosko.password = await kiosko.hash(kiosko.password, kiosko.salt);
});

module.exports = Kiosko;
