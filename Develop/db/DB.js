const util = require("util")
const fs = require("fs")
const notesData = "./Develop/db/db.json"
// const notesData = "db.json" //test route

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


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

module.exports = new DB();

// const testDB = new DB();
// const test = async ()=>{
//     await testDB.writeNotes({
//         title:"Test Note!!!!",
//         text: "Test text content!!!!"
//     })
//     console.log(await testDB.readNotes())
// }
// test()
