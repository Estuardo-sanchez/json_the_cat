const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (data[0] === undefined) {
      callback('breed not found', null);
      return;
    }
    const breed = data[0].description;
    callback(null, breed);




  });
};

module.exports = { fetchBreedDescription };