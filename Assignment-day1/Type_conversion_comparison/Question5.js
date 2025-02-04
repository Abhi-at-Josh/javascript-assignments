// 5. Can you use return instead of break in loops? 

function processNumbers() {
  let text2 = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) {
      return text2; // Exit the function when i is 3
    }
    text2 += "The number is " + i + "\n";
  }
  return text2;
}

console.log(processNumbers());
