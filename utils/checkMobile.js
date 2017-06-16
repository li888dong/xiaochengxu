

var fzAlert = require('fzAlert.js')

function checkMobile(m){
    var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
    if(!reg.test(m)) { 
        fzAlert.fzAlert({
            title: "",
            content: "请输入正确的手机号",
            callback: function(){
                console.log('callback');
            }
        })
        return false; 
    }else{
        return true;
    }
}

module.exports = {
    checkMobile: checkMobile
}