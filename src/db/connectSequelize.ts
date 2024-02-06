import { Sequelize } from 'sequelize';


const sequelize = new Sequelize("NodeJS", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

