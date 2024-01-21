const environment = require('../_helpers/environments.js');

const getContacts = async (iData) => {
    try {
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let docs = await db.collection('contacts').find({}).toArray();
        await client.close();
        console.log("getContacts >> Response: ", docs);
        return {
            error: false,
            message: 'The data query completed successfully.',
            docs: docs
        };
    } catch (err) {
        console.error("getContacts >> Error: ", err);
        throw err;
    }
}

const getContact = async (iData) => {
    try {
        const docId = new environment.ObjectId(iData._id)
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('contacts').findOne({"_id": docId});
        await client.close();
        console.log("getContacts >> Response: ", doc);
        return {
            error: false,
            message: 'The data query completed successfully.',
            doc: doc
        };

    } catch (err) {
        console.error("getContacts >> Error: ", err);
        throw err;
    }
}

const createContact = async (iData) => {
    try {
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('contacts').insertOne(iData);
        await client.close();
        console.log("createContact >> Response: ", doc);
        return {
            error: false,
            message: 'The record was created successfully.',
            id: doc.insertedId
        };
    } catch (err) {
        console.error("createContact >> Error: ", err);
        throw err;
    }
}

const modifyContact = async (iData, user) => {
    try {
        const docId = new environment.ObjectId(iData._id);
        const docBody = JSON.stringify(iData.body);
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('contacts').replaceOne({ "_id": docId }, user);
        await client.close();
        console.log("modifyContact >> Response: ", doc);
        console.log("DEBUG >> docBody: ", docBody);
        return {
            error: false,
            message: 'The record was updated successfully.',
            id: iData._id
        };
    } catch (err) {
        console.error("modifyContact >> Error: ", err);
        throw err;
    }
}


const deleteContact = async (iData) => {
    try {
        const docId = new environment.ObjectId(iData._id)
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('contacts').deleteOne({"_id": docId});
        await client.close();
        console.log("deleteContacts >> Response: ", doc);
        return {
            error: false,
            message: 'The delete completed successfully.',
            doc: doc
        };

    } catch (err) {
        console.error("deleteContacts >> Error: ", err);
        throw err;
    }
}



module.exports =  {
    getContacts,
    getContact,
    createContact,
    modifyContact,
    deleteContact
    modifyContact,
    deleteContact
}