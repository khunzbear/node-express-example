//Read and edit files

const fs = require('fs');

// Start input.txt

const data = fs.readFileSync('./myFiles/input.txt','utf-8')

console.log(data)

//เขียนไฟล์

const outputText = `Hello node js this text write at ${new Date()}`

fs.writeFileSync("myFiles/output.txt",outputText) 

console.log("Write files succuessful")