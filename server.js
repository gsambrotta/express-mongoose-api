const express = require('express')
require('dotenv').config()
require('./db')
const studentsRouter = require('./routers/students')

const app = express()
const port = 3000

// We need to use a proper middleware to parse the code
// before express v4, body-parser npm was needed. Now not anymore
// http://expressjs.com/en/api.html#express
// this needs to be declare before your routes
app.use(express.json()) // to parse json data
app.use(express.urlencoded()) // to parse .txt or .html data

app.use('/api/students', studentsRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
