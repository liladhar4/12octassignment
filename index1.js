const fs = require('fs');
  

console.log("\nFile Contents of file before append:",
  fs.readFileSync("example_file.txt", "utf8"));
  
fs.appendFile("example_file.txt", "World", (err) => {
  if (err) {
    console.log(err);
  }
  else {
    
    console.log("\nFile Contents of file after append:",
      fs.readFileSync("example_file.txt", "utf8"));
  }
});