const http = require('http');
const port = 4343;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>hello, World!!</h1>');
});

server.listen(port, () => {
    console.log(`App is running on prot ${port}`);
})