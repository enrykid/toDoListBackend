const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectDB = async () =>{
    try {
        await mongoose.connect(process.env.DB_MONGO)
        console.log('Data Base Conected');
    } catch (error) {
        console.log(error);
        process.exit(1) // detener app
    }

}

module.exports = conectDB