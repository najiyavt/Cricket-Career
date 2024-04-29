const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const routes=require('./routes/admin')
const sequelize=require('./util/databse')
const Player = require('./models/player')

app.use(bodyParser.json());
app.use(cors());
app.use('/',routes)

sequelize
.sync({force:true})
//.sync()
.then(
    app.listen(4000,() => console.log("4000 is working"))
)
.catch(err => console.log(err))