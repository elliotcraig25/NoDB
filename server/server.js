const express = require('express');
const bodyParser = require('body-parser');

const ctrl = require('./controller');

const app = express();
app.use(bodyParser.json());

app.get(`/api/info`, ctrl.getInfo);

app.post(`/api/info`, ctrl.addInfo);

app.put(`/api/info`, ctrl.updateInfo);

// app.delete();



app.listen(4000, ()=>{console.log('operational on 4000')});