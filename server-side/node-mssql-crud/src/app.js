import express from "express";
import config from "./dbConfig";
import userRoutes from "./routes/user.routes";
import adminRoutes from "./routes/admin.routes";
import studentRoutes from "./routes/student.routes";
import wardenRoutes from "./routes/warden.routes";
import guardRoutes from "./routes/guard.routes";
import morgan from "morgan";
import cors from "cors";

const app = express();

// setting
app.set("port", config.serverPort);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ exposedHeaders: "*" }));
app.use(morgan("dev"));

app.use("/gatepass/v2", userRoutes);
app.use("/gatepass/v2", adminRoutes);
app.use("/gatepass/v2", studentRoutes);
app.use("/gatepass/v2", wardenRoutes);
app.use("/gatepass/v2", guardRoutes);

export default app;
