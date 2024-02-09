// Asynchronous function that fetches data from an API
async function fetchData() {
    try {
      // Using the fetch API to make an asynchronous HTTP request
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/9');
      
      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the response JSON
      const data = await response.json();
      
      // Log the fetched data
      console.log('Fetched Data:', data);
      
      // Return the data
      return data;
    } catch (error) {
      console.error('Error during data fetching:', error.message);
      // Re-throw the error to be caught by the calling code if needed
      throw error;
    }
  }
  
  // Using the async function to initiate the asynchronous operation
  async function processData() {
    try {
      console.log('Fetching data...');
      const result = await fetchData();
      console.log('Data processing completed');
      // You can now use the 'result' data for further processing
    } catch (error) {
      console.error('Error during data processing:', error.message);
    }
  }
  
  // Call the function to initiate the asynchronous operation
  processData();
  