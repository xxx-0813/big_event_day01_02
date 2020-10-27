//开发环境地址
var baseUrl = 'http://ajax.frontend.itheima.net'
    //测试环境地址 
    // var baseUrl = 'http://ajax.frontend.itheima.net'
    //生产环境地址
    // var baseUrl = 'http://ajax.frontend.itheima.net'

// 拦截所有的ajax请求，拼接url地址
$.ajaxPrefilter(function(options) {
    // console.log(options.url);
    options.url = baseUrl + options.url
        // console.log(options.url);
})