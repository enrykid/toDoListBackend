const conectDB = require('./config/db')
const express = require('express')
const cors = require('cors')

//creacion del servidor
const app = express()

//conectar la DB
conectDB();

app.use(cors());

app.use(express.json());

app.use('/api/task', require('./routes/task'));

/*
// Definicion de ruta principal
app.get('/', (req,res) =>{
    res.send('Hola Mundo')
})
*/

const port = process.env.PORT | 4567

app.listen(4567,()=>{
    console.log("El servidor esta corriendo en el puerto " + port)
})