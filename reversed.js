function solution(str){
//returning using the split to put strings into arrays 
  //after the split string, we reverse the arrays then use join to put the arrays back to strings 
  return str.split('').reverse().join('')
}
