/*
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"
*/

const solution = (value) => {
  const length = value.toString().length;
  const padding = 5 - length;
  let string = "Value is ";
  for(let i = 0; i < padding; i++) {
    string += '0';
  }
  return string + value;
}