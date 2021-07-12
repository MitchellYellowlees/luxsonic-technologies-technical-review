const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

//requiring dotenv
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

// connect to mongoDB atlas
const uri = process.env.DB_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB connection established successfully')
})

app.get('/', (req, res) => {
    res.send('Node.js & Express are working. ')
})

//insert routes here

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

module.exports = app
