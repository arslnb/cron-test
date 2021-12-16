const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://7865-2001-8f8-1263-a3c4-c54e-8df3-930f-4e10.ngrok.io')
  .then(function (response) {
    // handle success
    console.log("SEND");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })