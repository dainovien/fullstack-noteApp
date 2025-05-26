<<<<<<< HEAD
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const User = db.define(
  "users",{ 
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    refresh_token: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    createdAt: "tanggal_dibuat",
    updatedAt: "tanggal_diperbarui",
  }
);

export default User;

(async () => {
  await db.sync();
=======
import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    category: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
>>>>>>> e2e287c4057f323e1f06d0d76813ee03d2601a8a
})();