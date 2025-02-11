const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json())

// import custom routers
const studentRouters = require('./routes/studentRoutes');

// use routers middleware to active
app.use('/', studentRouters);

dotenv.config();
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Backend on: http://localhost:${PORT}/`))