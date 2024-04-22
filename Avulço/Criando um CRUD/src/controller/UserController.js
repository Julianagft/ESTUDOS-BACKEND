// A RESPONSABILIDADE DO CONTROLLER É VALIDAR OS DADOS E ENVIAR PARA O SERVICE;
import { Router } from require("express");

const router = new Router();

router.get("/", (req, res) => {
    res.send("Ok");
})     


export default router;