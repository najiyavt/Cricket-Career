const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const routes=require('./routes/admin')
const sequelize=require('./util/databse')
app.use(bodyParser.json());
app.use(cors());
app.use('/',routes)

sequelize
.sync({force:true})
//.sync()
.then(
    app.listen(3000,() => console.log("3000 is working"))
)
.catch(err => console.log(err))