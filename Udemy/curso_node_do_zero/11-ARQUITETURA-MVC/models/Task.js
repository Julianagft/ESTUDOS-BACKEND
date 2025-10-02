import { DataTypes } from "sequelize";
import sequelize from "../db/conn.js";

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    required: true,
  },
  description: {
    type: DataTypes.INTEGER,
    required: true,
  },
  done: {
    type: DataTypes.BOOLEAN,
    required: true,
  },
});

// User.hasMany(Task);
// Task.belongsTo(User);

export default Task;