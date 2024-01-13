const express = require('express');
const cors = require('cors');
const environment = require('./_helpers/environments.js');
const professionalsRoute = require('./routes/professionals.route');

const app = express();
const options = {
    origin: '*'
};

console.log("Running Environment: ", environment.ENV.toUpperCase());

app.use(cors(options))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/apis/professionals/', require('./routes/professionals.route'));

async function initializeService() {
    const server = app.listen(environment.HTTP_PORT);
    server.setTimeout(180000);
    console.log("Server Listening on Port: ", environment.HTTP_PORT);
}

initializeService();
