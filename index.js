
// Import the http and fs modules
const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Route handling
    if (req.url === '/') {
       
        res.end('This is the Home Page'); // End the response here
    } else if (req.url === '/about') {
       
        res.end('This is the About Page'); // End the response here
    } else if (req.url === '/contact') {
       
        res.end('This is the Contact Page'); // End the response here
    } else if (req.url === '/file-write') {
        // Handle the /file-write route
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                // If there was an error writing the file, respond with an error message
                
                res.end('Error writing file'); // End the response here
            } else {
                // If the file was written successfully, respond with a success message
              
                res.end('File created and written successfully'); // End the response here
            }
        });
    } else {
        // Handle 404 Not Found
      
        res.end('404 Not Found'); // End the response here
    }
});

// Make the server listen on port 5500
server.listen(5500, () => {
    // Log a message to the console when the server starts
    console.log('Server is listening on port 5500');
});

