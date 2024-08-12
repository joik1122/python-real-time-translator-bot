async function translateText() {
    // Extract the text and languages from the form
    var text_for_translation = document.getElementById('text').value;
    var languages_chosen = document.getElementById('languages').value;
  
    // Prepare the payload
    var payload = {
      text: text_for_translation,
      languages: languages_chosen
    };
  
    try {
      // Execute the POST request to the translation endpoint
      const response = await fetch('http://localhost:8000/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse and handle the response
      const result = await response.json();
      alert('Translation request submitted. ID: ' + result.id);
      window.location.href = '/translate/' + result.id;
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit translation request.');
    }
  }
  