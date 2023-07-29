const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000; // 3000 is running 'react app'

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});