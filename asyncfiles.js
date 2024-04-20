// เขียนไฟล์ แบบ Async


const fs = require('fs');

fs.readFile("myFiles/input.txt",'utf-8',(error,data) => {
    if (error) {
        return console.log("Error",error);
    }
    console.log(data);
})

console.log("จบการทำงาน");