const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://saetbyeol:saetbyeol@appdatabase.jrbtgug.mongodb.net/wallet")

const connectionResult = mongoose.connection;

connectionResult.on('error', ()=>{
    console.log('Error connecting to database(mongoDB)');
});
connectionResult.on('connected', ()=>{
    console.log('connected to database(mongoDB)');
});

