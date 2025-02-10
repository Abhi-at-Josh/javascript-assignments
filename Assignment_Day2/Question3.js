// What will be printed to the console when the promise resolves and when it rejects?

const testAsyncFunction = () => {
    return new Promise((resolve , reject) => {
        if (Math.random() > 0.5) {
            resolve('Test Resolve');
        }
        else {
            reject('Tes Reject');
        }
    }).catch((err) => {
        console.log('Errror caught in testAsyncFunction: ',err);
    });
};
testAsyncFunction().then((res) => {
    console.log('Response in then block: ' ,res);
}).catch((err) => console.log('Error in catch block :',err));

// Output:
        // Errror caught in testAsyncFunction:  Tes Reject
        // Response in then block:  undefined
        