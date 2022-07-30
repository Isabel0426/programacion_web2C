const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const clinica= require('')


router.get(apiRoute+'/pacientes',clinica.getAll)

module.exports = router;