const http = require('http');

const url = require('url');

const StringDecoder = require('string_decoder').StringDecoder;

http.createServer((req,res)=>{
    const decoder=new StringDecoder('utf-8');

    let buffer='';
    req.on('data',data=>{
        buffer+=decoder.write(data);
    })
    req.on('end',()=>{
        buffer+=decoder.end();
        res.end();
        console.log(buffer);
    })
}).listen(8080,()=>{
    console.log('localhost8080');
})