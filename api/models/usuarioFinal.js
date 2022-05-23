const S = require("sequelize");
const db = require("../db");

class UsuarioFinal extends S.Model {}

UsuarioFinal.init(
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
    // number: {
    //   type: S.INTEGER,
    //   allowNull: false,
    //   unique: true,
    // },
    qr: {
      type: S.STRING,
      defaultValue: "",
    },
    money:{
      type: S.INTEGER,
      allowNull: true,
    },
    isResseller: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
    isAdmin: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "usuarioFinals", timestamps: false }
);

module.exports = UsuarioFinal;
