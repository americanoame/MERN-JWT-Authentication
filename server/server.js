const express = require('express');
const connectDb = require('./conf/db')
const authRoute = require('./routes/authRoute')
require('dotenv').config()
const app = express();
const PORT = 8000

connectDb()
app.use(express.json())
app.use('/auth', authRoute)
app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
 })
 

  