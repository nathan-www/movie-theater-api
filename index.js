const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

app.use('/', routes)

app.use('/', (err, req, res, next) => {
    res.status(500).json({ status: 'fail', ...err })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
