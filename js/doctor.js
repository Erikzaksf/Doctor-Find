var apiKey = require('./../.env').apiKey;


export class DoctorSearch {
  constructor(initialize) {
  initialize = parseInt(initialize);
  this.initialize = initialize;

  }

  call(userSearch) {
    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${userSearch}&skip=2&limit=10&user_key=` + apiKey;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

      promise.then(function(response) {
        let body = JSON.parse(response);
          $('.name').text(`Name:${body.data[0].profile.first_name}${body.data[0].profile.last_name}`);
          $('.address').text(`Address:${body.data[0].practices[0].visit_address.city}, ${body.data[0].practices[0].visit_address.state}, ${body.data[0].practices[0].visit_address.city}`);
          $('.phone').text(`Phone:${body.data[0].practices[0].phones[0].number}`);
          $('patients').text(`Accepting new patients: ${body.data[0].practices[0].accepts_new_patient}`)
        },
          function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`)
        });




  }
}
