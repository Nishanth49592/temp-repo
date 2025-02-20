
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req);
    if(req.url ===   '/'){
        res.end("welco")

    }
    if(req.url  === '/about'){
    res.end("here is oir short history");
    }
    res.end(`
        <h1>Oops!</h1>`)
})

server.listen(3000);