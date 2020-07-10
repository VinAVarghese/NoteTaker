const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,"index.html"))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname,"notes.html"))
})

app.listen(port, () => console.log(`Note Taker App listening on port:${PORT}!`))