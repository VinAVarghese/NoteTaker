const express = require('express')
const path = require('path')
const DB = require("./Develop/db/DB.js")
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"./Develop/public/index.html"))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname,"./Develop/public/notes.html"))
})

app.get('/api/notes', async (req, res) => {
  const currentNotes = await DB.readNotes()
  console.log(currentNotes);
  res.json(currentNotes)
})

app.post('/api/notes', async (req, res) => {
  const newNote = req.body;
  const currentNotes = await DB.readNotes()
})

app.listen(PORT, () => console.log(`Note Taker App listening on port:${PORT}`))