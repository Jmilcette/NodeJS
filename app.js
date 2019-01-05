var fs = require("fs");


fs.readFile("readme.txt", "utf8", function(err, data){
    console.log("test1");
    if(err) {
        console.log("error!");
    } else {
        console.log("test2");
        fs.writeFile("writeme.txt", data);
    }
});

// fs.writeFileSync("writeme.txt", readMe);
console.log("test3");