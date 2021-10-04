const express = require('express')
const app = express()
app.use(express.json())
const port = 8000

const callApis = require('./routes/index')

app.use('/', callApis)


app.listen(port, (err) => {
    if(err) throw err;
    console.log(`server is running on this port ${port}`)
});


