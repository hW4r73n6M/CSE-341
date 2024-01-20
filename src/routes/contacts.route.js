const express = require('express');
const router = express.Router();
const ctrlFn = require('../controllers/contacts.controllers');


// router.get('/', ctrlFn.helloWorld);
router.get('/all', ctrlFn.getAllContacts);
router.get('/id/:id', ctrlFn.getContactById);
router.post('/create', ctrlFn.createNewContact);
router.put('/update/:id', ctrlFn.modifyCurrentContact);
router.delete('/delete/:id', ctrlFn.deleteCurrentContact);

module.exports = router;