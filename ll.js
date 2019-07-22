var http=require('http')
var path=require('path')
http.createServer((req,res)=>{
    // path.resolve 将一个参数转换为一个绝对路径
    // var old=path.resolve('./static/aaa/bb')
    // path.normalize() 路径格式化
    // var oldpath=path.normalize('/aa/bb/cc')
    // path.extname() 获取文件的扩展名
    // var oldpath=path.extname('index.html')
    // path.format() 将对象转换为路径
    var oldpath=path.format({
        root:"",
        dir:'c:\a\b',
        base:'\b'
    })
    // path.isAbsolute()返回绝对路径
    // path.join()路径拼接
    // path.relative() 返回相对路径
    // path.dirname() 返回文件目录
    // path.parse() 解析问件路径
    console.log(oldpath)
    res.end()
}).listen(3000)