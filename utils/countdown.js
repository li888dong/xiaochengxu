


function countdown(that) {
 var second = that.data.second
 if (second == 0) {
  return ;
 }
 var timer = setTimeout(function(){
  that.setData({
   second: second - 1
  });
  countdown(that);
 }
 ,1000)
}

module.exports = {
  countdown: countdown
}