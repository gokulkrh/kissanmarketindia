const express = require('express');
const routes = require('./app/routes')

const app = express();
const PORT = process.env.PORT || 5000

app.use('/', routes);
app.listen(PORT, console.log("server is running"));