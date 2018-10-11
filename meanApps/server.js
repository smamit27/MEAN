const express =  require('express');
const bodyParser =  require('body-parser');
const api = require('./server/route/api');

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use('/api',api);

app.get('/',function(req, res) {
    res.send('Hello From server');
})

app.listen(PORT,function() {
    console.log('Server Running on Localhost: '+ PORT);
})