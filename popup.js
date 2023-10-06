document.addEventListener('DOMContentLoaded', function () {
    const questionInput = document.getElementById('textInput');
    const submitButton = document.getElementById('submitButton');
  
    submitButton.addEventListener('click', function () {
      const question = questionInput.value;
      console.log(question)
  
      // Send a POST request to your API
      fetch('http://127.0.0.1:8000/get_answer', {
        method: 'POST',
        body: new URLSearchParams({ question }), // Send the question as form data
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => response.text())
        .then((data) => {
          // Display the API response in the extension popup
        //   answerResult.textContent = `Answer: ${data}`;
        //   console.log(answerResult)

        // Update the HTML element with the response
        document.getElementById("res").textContent = data;

        })
        .catch((error) => {
          console.error('API Error:', error);
        });
    });
  });
  