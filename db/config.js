const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.BD_CNN, {            
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        });
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}

module.exports = {
    dbConnection
}