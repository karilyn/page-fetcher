// take two command line args (URL, path) and download file to local path

const request = require('request');
const fs = require('fs');

// process.argv[2] gives us the third item from the command line (the URL in this case)
const URL = process.argv[2];
// this gives us the fourth item from the command line (the path, in this case)
const path = process.argv[3];

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

// send the HTTP request
request(URL, (error, response, body) => {
  // print error if one occured
  if (error) {
    console.log('error: ', error)
  }

  // read the file first to see if it already exists in this location
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      console.log("Error: ", error);
    // } else {
    //     if (data.length > 0) {
    //     }
    }
  })


  // console.log('statusCode: ', response && response.statusCode);
  fs.writeFile(`${path}`, body, 'utf8', function(error) {
    if (error) {
      console.log('error occurred: ', error)
    } else {
      // successful write message
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`)
    }
  })
});
;




