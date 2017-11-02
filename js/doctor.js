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
        return Promise.all(promises);
      }
      request.open("GET", url, true);
      request.send();

      promise.then(function(response) {
        body = JSON.parse(response);
        $('.name').text(`Name:${data.profile.first_name}${data.profile.last_name}`);
        $('.address').text(`Address:${data.practice.visit_address}`);
        $('.phone').text(`Phone:${data.practice.phones[0]}`)
        $('patients').text(`Accepting new patients: ${doctor.practices[0].accepts_new_patient}`)
      },  function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
      return Promise.all(promises);
    });

  }
}
