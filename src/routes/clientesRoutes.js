import{ Router } from "express"
import { getCliente, getClientePorId, postCliente, putCliente, deleteCliente } from "../controllers/clientesController.js"


const router = Router();

router.get("/clientes/", getCliente);

router.get("/clientes/:id/", getClientePorId);

router.post("/clientes/", postCliente);

router.put("/clientes/:id/", putCliente);

router.delete("/clientes/:id/", deleteCliente);


export default router;