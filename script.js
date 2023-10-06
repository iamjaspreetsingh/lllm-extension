async function fetchData() {
    const options = {
      method: 'GET'
    };
  
    try {
      const res = await fetch('http://127.0.0.1:8000/', options);
      
      if (res.status === 200) {
        // Assuming that the response is text data, you can use text() to get the response body
        const data = await res.text();
        // Update the HTML element with the response
        document.getElementById("conn").textContent = data;
      } else {
        console.error('Request failed with status:', res.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();
  