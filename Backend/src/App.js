require('dotenv').config()

const express = require('express');
const app = express();
const getTravel = require('../Routes/Home')
const connectDB = require('../DB/connect');
const { default: mongoose } = require('mongoose');
const notFound=require('../Middlewares/notFound')
const cors = require('cors')

app.use(cors());




mongoose.set('strictQuery',false)
//middleware
//app.use(express.static('./CLIENT/build'));
app.use(express.json());
 
//routes
app.get('/',(req,res)=>{
res.send('Travelry App')
})

app.use('/travelry',getTravel)

const port = 5000; 

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))

    } catch (error) {
        console.log(error);
    }
}
app.use(notFound)

start()

