import express from 'express';
import config from './config';
import userRoutes from './routes/user.routes';
import adminRoutes from './routes/admin.routes';
import morgan from "morgan";
import cors from "cors";


const app = express();

// setting
app.set('port', config.port);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));


app.use("/gatepass/v2",userRoutes);
app.use("/gatepass/v2",adminRoutes);

export default app;