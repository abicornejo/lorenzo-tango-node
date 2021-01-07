const mongooseDB = require('./mongoose.connection')
class ConnectionBase {

    getConnection() {
        const con = new mongooseDB();
        return con.getConnection();
        //throw new Error('Please implement the getConnection method in the derived class to return the connection object or Promise which resolves with the connection object')
    }

    clearDatabase() {
        const con = new mongooseDB();
        return con.clearDatabase();
        //throw new Error('Please implement the clearDatabase method in the derived class to delete all the items from the database')
    }

    closeConnection() {
        const con = new mongooseDB();
        return con.closeConnection();
    }
}

module.exports = ConnectionBase;
