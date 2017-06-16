/*
 * fzAlert({title: 'title',
        content: 'content',
        showCancel: false,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: function(){},
        fail: function(){},
        complete: function(){}
    })
 **/


function fzAlert(data){

    var defaults = {
        title: 'title',
        content: 'content',
        showCancel: false,
        cancelText: '取消1',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: function(){},
        fail: function(){},
        complete: function(){}
    }

    var ops = Object.assign(defaults,data);

    wx.showModal(ops);
}

module.exports = {
    fzAlert: fzAlert
}