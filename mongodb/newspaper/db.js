const MongoClient = require('mongodb').MongoClient;

const person_repo = require('./repositories/person_repo');
const data = require('./person.json');




// declare the uri and database names
const uri = 'mongodb://localhost:27017';
const db_name = 'circulation';










async function main() {
    const client = new MongoClient(uri);
    await client.connect();

    // * connect to the database
    const admin = client.db(db_name).admin();

    console.log(await admin.serverStatus());
    // console.log(await admin.listDatabases());


}

main();