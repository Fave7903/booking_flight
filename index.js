const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/flightRoute')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(routes)
MONGO_URI = "mongodb+srv://favoursolomon:femi7903@cluster0.otyku.mongodb.net/flight?retryWrites=true&w=majority"
PORT = process.env.PORT || 9000
mongoose.connect(MONGO_URI, { useNewUrlParser: true})
.then(() =>console.log("DB connected"))
.catch((err) => console.log(err.message))



app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))