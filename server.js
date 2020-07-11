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
  try {  
    const currentNotes = await DB.readNotes()
    console.log(currentNotes);
    res.json(currentNotes)
  } catch (e){
    console.log(e);
  }
})

app.post('/api/notes', async (req, res) => {
  const newNote = req.body;
  const currentNotes = await DB.readNotes()
  await DB.writeNotes([...currentNotes, newNote]) 
  res.json(newNote)
})

app.listen(PORT, () => console.log(`Note Taker App listening on port:${PORT}`))