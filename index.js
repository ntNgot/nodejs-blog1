const express = require('express')
const app = express()
const port = 300

app.get('/tin-tuc', (req, res) => {
    res.send("hello")
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})