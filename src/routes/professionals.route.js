const express = require('express');
const router = express.Router();
const ctrlFn = require('../controllers/professionals.controllers');


router.get('/all', ctrlFn.getAllProfessionals);
router.get('/id/:id', ctrlFn.getProfessionalById);
router.post('/create', ctrlFn.createNewProfessional);
router.put('/update', ctrlFn.modifyCurrentProfessional);

module.exports = router;