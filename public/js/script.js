document.getElementById('sendBtn').addEventListener('click', () => {
    const userMessage = document.getElementById('userMessage').value;
  
    // Sending the user's message to the chatbot API in the backend
    fetch('/chatapi/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
const htmlFormattedResponse = convertGeminiResponseToHtml(data.response);

      // Display the chatbot's response
      document.getElementById('chatbotResponse').innerHTML = htmlFormattedResponse;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  function convertGeminiResponseToHtml(text) {
    // Replace '**' for h2 tags
    let html = text.replace(/\*\*(.*?)\*\*/g, '<h2>$1</h2>');
    // Replace '*...*' with <h3>...</h3> for subheadings
    html = html.replace(/\*(.*?)\*/g, '<h3>$1</h3>');
    // Replace '***...***' for subpoints (if applicable, assuming asterisks around subpoints)
    html = html.replace(/\*(.*?)\*/g, '<li>$1</li>');
    return html;
}

// Example Gemini API response

// Convert to HTML
// const htmlFormattedResponse = convertGeminiResponseToHtml(geminiApiResponse);

// Output the result (this would be the HTML structure)
console.log(htmlFormattedResponse);
