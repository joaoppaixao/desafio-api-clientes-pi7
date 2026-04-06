import express from "express"
import clientesRoute from "./routes/clientesRoutes.js"


const app = express();

app.use(express.json());

// rotas 
app.use(clientesRoute);


export default app;