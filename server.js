// Require
const express = require('express')
const path = require('path')
const DB = require("./Develop/db/DB.js")
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"./Develop/public/index.html"))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname,"./Develop/public/notes.html"))
})

app.get('/api/notes', async (req, res) => {
  try {  
    let currentNotes = await DB.readNotes()
    console.log(currentNotes);
    res.json(currentNotes)
  } catch (e){
    console.log(e);
  }
})

// API Controller
app.post('/api/notes', async (req, res) => {
  const notes = req.body;
  let currentNotes = await DB.readNotes()
  await DB.writeNotes([...currentNotes, notes]) 
  res.json(notes)
})

// Delete-er
app.delete('/api/notes/:id', async (req, res) => {
  const chosenID = req.params.id
  let currentNotes = await DB.readNotes()
  // Some function to check chosenID with IDs of objects and then delete that
  // await DB.writeNotes([...currentNotes, notes]) EDIT TO ONLY WRITE LEFT OVER OBJECTS
  // console.log(chosenID + " has been deleted");
})

// Listening
app.listen(PORT, () => console.log(`Note Taker App listening on port: ${PORT}`))