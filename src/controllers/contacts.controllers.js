const express = require('express');
const srvFn = require('../services/contacts.services');
const { body, validationResult } = require('express-validator');


const getAllContacts = async (req, res) => {
    try {
        let iData = {};
        const response = await srvFn.getContacts(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const getContactById = async (req, res) => {
    try {
        let iData = {
            _id: req.params.id
        };
        const response = await srvFn.getContact(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const createNewContact = async (req, res) => {
    try {
        let iData = req.body;
        body('firstName').exists().isLength({ min: 3}).withMessage('must be at least 3 chars long.')
        body('lastName').exists().isLength({ min: 3}).withMessage('must be at least 3 chars long.')
        body('email').exists().isEmail().withMessage('must be a valid email.')
        body('favoriteColor').exists().not().isEmpty().withMessage('must contain the color name.')
        body('birthday').exists().isDate().withMessage('must be a date.')
        
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        const response = await srvFn.createContact(iData);        
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const modifyContactById = async (req, res) => {
    try {
        let iData = {
            _id: req.params.id
        };
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };
        const response = await srvFn.modifyContact(iData, user);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


const deleteContactById = async (req, res) => {
    try {
        let iData = {
            _id: req.params.id
        };
        const response = await srvFn.deleteContact(iData);
        if (response.error) { return res.status(404).json(response)}
        return res.json(response)
    } catch (err) {
        return res.status(500).json({error: true, message: 'Error Interno del Sistema: ' + err});
    }
}


module.exports = {
    getAllContacts,
    getContactById,
    createNewContact,
    modifyContactById,
    deleteContactById
};