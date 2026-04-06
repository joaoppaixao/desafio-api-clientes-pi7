import express from "express"
import clientesRoute from "./routes/clientesRoutes.js"
import { logger } from "./middlewares/loggerMiddleware.js"
import { notFound } from "./middlewares/notFoundMiddleware.js";


const app = express();

app.use(express.json());

// logs
app.use(logger);

// rotas 
app.use(clientesRoute);

// middleware de rota não encontrada
app.use(notFound);


export default app;