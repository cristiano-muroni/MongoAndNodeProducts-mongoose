const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.URL_DB;
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log('connected database');
    } catch (error) {
        console.log(error);
    }
};

run();
module.exports = client;