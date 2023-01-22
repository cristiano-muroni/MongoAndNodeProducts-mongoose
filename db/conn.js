const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.URL_DB;


async function main() {
    await mongoose.connect(uri);
    console.log('Connected Database!');
};

main().catch(err => console.log(err));

module.exports = mongoose;