const express = require('express')
const env = require('dotenv').config();
const routes = require('./routes')

const app = express()

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`)
})
