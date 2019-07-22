function showindex(req,res){
    res.end('首页')
}
function shownew(req,res){
    res.end('新闻')
}
function showablout(req,res){
    res.end('关于')
}
function show404(req,res){
    res.end('404')
}
module.exports={
    showindex:showindex,
    shownew:shownew,
    showablout:showablout,
    show404:show404
}