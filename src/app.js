import express from "express"
import clientesRoute from "./routes/clientesRoutes.js"
import { logger } from "./middlewares/loggerMiddleware.js"


const app = express();

app.use(express.json());

// logs
app.use(logger);

// rotas 
app.use(clientesRoute);


export default app;