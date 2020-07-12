// Require (built in node methods and data from db.json)
const util = require("util")
const fs = require("fs")
const notesData = "./Develop/db/db.json"

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Singleton class to read and write db.json
class DB {
    async readNotes(){
        try {
            const notesRaw = await readFileAsync(notesData, "utf8")
            return notesRaw?JSON.parse(notesRaw):[]
        } catch(err){
            console.log("Somthing wen wrong while READING notes: " + err);
        }
    }
    async writeNotes(notesArr){
        try {
          await writeFileAsync(notesData, JSON.stringify(notesArr))
        } catch(err){
            console.log("Something went wrong while WRITING notes ", err)
        }
    }
}

// Exporting single instance for server.js
module.exports = new DB();
