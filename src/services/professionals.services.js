const environment = require('../_helpers/environments.js');

const getProfessionals = async (iData) => {
    try {
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let docs = await db.collection('professional').find({}).toArray();
        await client.close();
        console.log("getProfessionals >> Response: ", docs);
        return {
            error: false,
            message: 'The data query completed successfully.',
            docs: docs
        };
    } catch (err) {
        console.error("getProfessionals >> Error: ", err);
        throw err;
    }
}

const getProfessional = async (iData) => {
    try {
        const docId = new environment.ObjectId(iData._id)
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('professional').findOne({"_id": docId});
        await client.close();
        console.log("getProfessionals >> Response: ", doc);
        return {
            error: false,
            message: 'The data query completed successfully.',
            doc: doc
        };

    } catch (err) {
        console.error("getProfessionals >> Error: ", err);
        throw err;
    }
}

const createProfessional = async (iData) => {
    try {
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('professional').insertOne(iData);
        await client.close();
        console.log("createProfessional >> Response: ", doc);
        return {
            error: false,
            message: 'The record was created successfully.',
            id: doc.insertedId
        };
    } catch (err) {
        console.error("createProfessional >> Error: ", err);
        throw err;
    }
}

const modifyProfessional = async (iData) => {
    try {
        const docId = new environment.ObjectId(iData._id)
        const client = await environment.MongoClient.connect(environment.mongoServer);
        const db = client.db(environment.mongoDB);
        let doc = await db.collection('professional').updateOne({ "_id": docId }, { $set: { "name": iData.name }});
        await client.close();
        console.log("modifyProfessional >> Response: ", doc);
        return {
            error: false,
            message: 'The record was updated successfully.',
            id: iData._id
        };
    } catch (err) {
        console.error("modifyProfessional >> Error: ", err);
        throw err;
    }
}



module.exports =  {
    getProfessionals,
    getProfessional,
    createProfessional,
    modifyProfessional
}