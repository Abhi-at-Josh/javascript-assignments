// ● Write a function that can stop execution of a function for the number of milliseconds
// sent as an argument
// Example:
// const func = async () => {
// console.log(“Printing before”)
// //Call your function here eg. sleep(3000)
// console.log(“Printing after”)
// }

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

const func = async () => {
    console.log("Printing before")
    await sleep(3000);
    console.log("Printing after")
};

func();

// Output:
// Printing before
//#######stop the exicution for 3000 ms
// Printing after
