const express = require('express')
const connectDB = require('./config/db')
const path = require('path');
const dotenv = require('dotenv')
dotenv.config()
const app = express();


app.use(express.json({extended : false }))
//connect db
connectDB();

/* app.get('/', (req,res) => {
    res.send('welcome to instagram')
}) */


//routes
app.use('/auth', require('./routes/auth'))
app.use('/post', require('./routes/post'))
app.use('/users', require('./routes/user'))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is running at ${PORT}`))

