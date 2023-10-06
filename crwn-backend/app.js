require('dotenv').config();
const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const morgan = require('morgan')
const app = express()
const routers = require('./routers')

const port = 5000

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({limit: '10mb',extended:true}))
app.use(bodyParser.json({limit: '10mb'}));
app.use(cookieParser(process.env.JWT_SECRET))
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true
  })
);

mongoose.set('strictQuery', false);

mongoose.connect(`mongodb://0.0.0.0:27017/crwnDB`)
.then(()=>console.log("connenct"))


app.use(routers)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})