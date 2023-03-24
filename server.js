const express = require('express');
const connectDb = require('./conf/db')
require('dotenv').config()
const app = express();
const PORT = 8000

connectDb()
app.listen(PORT, () => {
    console.log(`API is running on pot ${PORT}`);
 })
 

  /* this is good job */