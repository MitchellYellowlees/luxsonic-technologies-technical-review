const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

// connect to mongoDB atlas
const uri = "mongodb+srv://miglye:mitch123@cluster0.0we5k.mongodb.net/Cluster0?retryWrites=true&w=majority";
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