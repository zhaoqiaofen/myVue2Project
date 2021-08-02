export function formatDate (datetime) {
  let date = new Date(Date.parse(datetime))
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  return year + '-' + formatTen(month) + '-' + formatTen(day) + ' ' + formatTen(hour) + ':' + formatTen(minute) + ':' + formatTen(second)
}
function formatTen (num) {
  return num > 9 ? (num + '') : ('0' + num)
}
