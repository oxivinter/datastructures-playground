// bracket matcher with (), [], {} and <> brackets
// return TRUE only if the string provided has proper bracket sequences
// - total number of left brackets must be equal to total number of right brackets
// - for every right bracket of a type, there must be a left bracket of same type
// following https://www.youtube.com/watch?v=POM1dnAYgL4

// ###############################################################

// const line = "()";         //Bracket sequence is valid
// const line = "()[]";       //Bracket sequence is valid
// const line = "([])";       //Bracket sequence is valid
// const line = "({)}";       //Mismatched brackets
// const line = "(()[]";      //There are more left brackets than right brackets
// const line = "<>(){}[]";   //Bracket sequence is valid
const line = "<>[()]]";       //There are more right brackets than left brackets

//create stack
const stack = [];

//create method to match left and right brackets
const verifyPair = (a, b) => {
  if (a == "(" && b == ")") return true;
  if (a == "[" && b == "]") return true;
  if (a == "{" && b == "}") return true;
  if (a == "<" && b == ">") return true;
  else {
    console.log("Mismatched brackets");
    return false;
  }
};

//find first bracket element and push into stack;
//how? iterate through every character of the string
function verifyLine(line) {
  for (let i = 0; i < line.length; i++) {
    if (
      line[i] === "[" ||
      line[i] === "(" ||
      line[i] === "{" ||
      line[i] === "<"
    ) {
      stack.push(line[i]);
      //element is inserted in the stack
    }
    if (
      line[i] === "]" ||
      line[i] === ")" ||
      line[i] === "}" ||
      line[i] === ">"
    ) {
      if (stack.length == 0) {
        console.log("There are more right brackets than left brackets");
        return false;
      } else {
        if (!verifyPair(stack.pop(), line[i])) return false; //if true, the pop still happens and nothing is returned, allowing the iterations to continue
      }
    }
  }
  if (!stack.length == 0) {
    console.log("There are more left brackets than right brackets");
    return false;
  }
  console.log("Bracket sequence is valid");
  return true;
}

console.log(line);
verifyLine(line);