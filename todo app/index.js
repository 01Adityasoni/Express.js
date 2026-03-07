const express = require('express');
const app = express();


app.listen(3000, () => {
    console.log('Server is successfully running  3000');
});

app.use(express.json()); 
