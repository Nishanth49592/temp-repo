const { readFile, writeFile } = require("fs");

readFile("./newfolder/one.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("Error reading file:", err);C:
        return;
    }
    const first = result;

    
    readFile("./newfolder/sub-folder/two.txt", "utf-8", (err, result) => {
        if (err) {
            console.log("Error reading file:", err);        
            return;
        }
        const second = result;
    writeFile("./newfolder/result-sync.txt", `Here is my ${first} ,${second}`, (err) => {
        if (err) {
            console.log("Error writing file:", err);
            return;
        }
        console.log("File written successfully!");
        console.log("perfect");
    });
    });
});
