const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const express = require('express')
const path = require('path')

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,"index.html"))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname,"notes.html"))
})

app.listen(port, () => console.log(`Note Taker App listening on port:${PORT}!`))