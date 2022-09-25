const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const clinicaControll= require('../controller/clinica');

//router.get(apiRoute+'/notas',notasController.getAll)
router.post(apiRoute+'/pacientes',clinicaControll.create)

module.exports = router;