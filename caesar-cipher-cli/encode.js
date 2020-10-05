const isUpper = require('./isUpper')
module.exports = function encode(str, num){
  num = Number(num)
  const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerAlpha = "abcdefghijklmnopqrstuvwxyz"
  let newstr = ''
  for(let i = 0; i < str.length; i++){
    if(lowerAlpha.includes((str[i]).toLowerCase())){
     newstr += isUpper(str[i]) ?
     upperAlpha[(upperAlpha.indexOf(str[i]) + num) % 26] : 
     lowerAlpha[(lowerAlpha.indexOf(str[i]) + num) % 26]
 }
    else newstr += str[i]
  }
  return newstr
}
