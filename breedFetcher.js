const request = require('request');
const breed = process.argv[2];

const breedFinder = function(breed) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }

    const data = JSON.parse(body);

    if (data[0] === undefined) {
      console.log("breed not found");
      return;
    }
    console.log(data[0].description);
    //console.log(typeof data);

    

  });
};
breedFinder(breed);