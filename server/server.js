const express = require('express');
const bodyParser = require('body-parser');

const ctrl = require('./controller');



const app = express();
app.use(bodyParser.json());

app.get(`/api/info`, ctrl.getInfo);

app.post(`/api/info`, ctrl.addInfo);

app.put(`/api/moreinfo`, ctrl.updateCurrent);

app.put(`/api/info/a`, ctrl.updateA);

app.put(`/api/info/b`, ctrl.updateB);

app.put(`/api/info/c`, ctrl.updateC); 

app.put(`/api/info/d`, ctrl.updateD); 

app.delete(`/api/protocol/x`, ctrl.protocolX);



app.listen(4000, ()=>{console.log('operational on 4000')});