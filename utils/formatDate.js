


function formatDate() {
  var date = new Date;
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

//   return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
  var _date = [year, month, day].join('-');
  return _date;
}

module.exports = {
    formatDate: formatDate
}