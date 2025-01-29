const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

// http://localhost:3000/

router.post('/addStudent', studentController.addStudent);
router.get('/allStudents', studentController.getStudents);
router.get('/getData/:id', studentController.getData);
router.put('/removeStudent/:id', studentController.removeStudent);


module.exports = router;