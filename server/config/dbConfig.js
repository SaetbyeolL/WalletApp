const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url)

const connectionResult = mongoose.connection;

connectionResult.on('error', ()=>{
    console.log('Error connecting to database(mongoDB)');
});
connectionResult.on('connected', ()=>{
    console.log('connected to database(mongoDB)');
});

