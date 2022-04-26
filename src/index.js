const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 300

app.use(morgan('combined'))

app.get('/tin-tuc', (req, res) => {
    res.send("hello")
})
app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})