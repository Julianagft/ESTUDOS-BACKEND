import { DataTypes } from "sequelize";
import sequelize from "../db/conn.js";

const db = sequelize;

const User = db.define('user', {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true,
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    }
});

export default User;
