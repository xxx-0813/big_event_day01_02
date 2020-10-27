$(function() {

    // 1.注册于登录框的切换
    $('.link_reg').on('click', function() {
        $('.login_box').hide().next().show()
    })
    $('.link_login').on('click', function() {
        $('.reg_box').hide().prev().show()
    })

    // 2. 自定义验证规则 
    var form = layui.form
    console.log(form);
    // 自定义校验规则
    form.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        // 校验两次密码是否一致的规则
        repwd: function(value) {
            // 获取注册表单的密码框值
            var pwd = $('.reg_box input[name=password]').val()
            if (pwd !== value) {
                return '两次密码输入不一致！'
            }
        }

    })
    console.log(form.verify);
    // 3.表单注册提交事件：
    $('#reg_form').on('submit', function(e) {
        // 阻止默认行为
        e.preventDefault()

        // 发送ajax注册请求
        $.ajax({
            url: 'http://ajax.frontend.itheima.net/api/reguser',
            type: 'POST',
            data: {
                username: $('.reg_box [name=username]').val(),
                password: $('.reg_box [name=password]').val(),
            },
            success: function(res) {
                if (res.status !== 0) {
                    return alert(res.message)
                }
                alert(res.message)
            }
        })
    })

})