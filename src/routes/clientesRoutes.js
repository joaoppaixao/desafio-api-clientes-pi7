import{ Router } from "express"
import { getCliente, getClientePorId, postCliente, putCliente, deleteCliente } from "../controllers/clientesController.js"
import { validarCliente } from "../middlewares/validarCliente.js";


const router = Router();

router.get("/clientes/", getCliente);

router.get("/clientes/:id/", getClientePorId);

router.post("/clientes/", validarCliente, postCliente);

router.put("/clientes/:id/", validarCliente, putCliente);

router.delete("/clientes/:id/", deleteCliente);


export default router;