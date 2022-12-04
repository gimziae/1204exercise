// @ts-check
const req = require('express/lib/request')

const mongoClient = require('./mongoConnect')

const db = {
    getAllUsers: async () => {
        const client = await mongoClient.connect();
        const users = client.db('kdt4').collection('user');

        const allUsers = await users.find({}).toArray();
        return allUsers;
    }
}

module.exports = db;