
// URL of the API that returns JSON data
const url = 'http://127.0.0.1:8000/api/users/create';

// // Fetch the JSON data from the URL
// fetch(url)
//     .then(response => response.json()) // Parse the JSON from the response
//     .then(data => {
//         // Convert JSON object to a string with pretty printing (2 spaces indentation)
//         const jsonString = JSON.stringify(data, null, 2);

//         // Display JSON data in the div
//         document.getElementById('jsonData').textContent = jsonString;
//     })
//     .catch(error => {
//         console.error('Error fetching the JSON data:', error);
//     });
function sendPostRequest() {
    const data = {
      name: 'mohit',
      age:23
      // ... other data
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  sendPostRequest()

