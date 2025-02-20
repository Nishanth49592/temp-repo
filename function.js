const http = require('http'); // Import the HTTP module

// Create a server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set status and response type
    res.end('Hello, welcome to my server!'); // Send response
});

// Start the server and listen on port 3000
server.listen(2000, () => {
    console.log('Server is running on http://localhost:3000');
});
