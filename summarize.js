// makes our API call using axios. axios is a library that makes it easy to make HTTP requests in NodeJS and the browser. We already added axios for you to this project in the package.json file to use in our server.
const axios = require('axios');

// This is the function where the call to the API is made. Returns the summarized text as a string.

async function summarizeText(text) {

  // INSERT CODE SNIPPET FROM POSTMAN BELOW
  let data = JSON.stringify({
    "inputs": text,
    "parameters": {
      "max_length": 100,
      "min_length": 30
    }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    headers: { 
      //to indicate that we are sending JSON data in the request body
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + process.env['ACCESS_TOKEN']
    },
    data : data
  };

    try {
      const response = await axios.request(config);
      return response.data[0].summary_text;
    }
    catch (error) {
      console.log(error);
    }

}

// Allows for summarizeText() to be called outside of this file

module.exports = summarizeText;