var http=require('http')
var router=require('./01.js')
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'})
    if(req.url=='/'){
        router.showindex(req,res)
    }else if(req.url=='/new'){
        router.shownew(req,res)
    }else if(req.url=='/ablout'){
        router.showablout(req,res)
    }else{
        router.show404(req,res)
    }
}).listen(3000)
