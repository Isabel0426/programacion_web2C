const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const studentsController= require('')
const courseController = require('')

//course
router.get(apiRoute+'/course',courseController.getAll)
router.post(apiRoute+'/course',courseController.create)
router.put(apiRoute+'/course',courseController.update)
router.delete(apiRoute+'/course',courseController.delete)

//students
router.get(apiRoute+'/pacientes',studentsController.getAll)

module.exports = router;