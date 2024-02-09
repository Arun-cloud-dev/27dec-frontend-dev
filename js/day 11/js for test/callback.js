// Function with a callback
function doSomethingAsync(callback) {
  // Simulating an asynchronous operation (e.g., fetching data)
  setTimeout(function () {
    console.log("Async operation completed");
    // Execute the callback function
    callback();
  }, 4000); // Simulating a 2-second delay
}

// Callback function
function afterAsyncOperation() {
  console.log("Callback executed");
}

// Call the function with the callback
doSomethingAsync(function() {
    console.log("Anonymous callback executed");
  });
