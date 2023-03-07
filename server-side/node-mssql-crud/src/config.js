import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 4000,
  dbUser: process.env.DB_USER || "root",
  dbPassword: process.env.DB_PASSWORD || "root",
  dbServer: process.env.DB_SERVER || "AYUSH-ZEPHYRUS\\SQLEXPRESS",
  dbDatabase: process.env.DB_DATABASE || "gps_db",
};
