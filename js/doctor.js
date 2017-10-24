var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#searchParam').onlick(function() {
    let userSearch = $('#search').val();
    $('#search').val("");

    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${userSearch}&skip=2&limit=10&user_key=` + apiKey;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    getElements = function(response) {
      $('.name').text(`Name:${data.profile.first_name}${data.profile.last_name}`);
      $('.address').text(`Address:${data.practice.visit_address.*}`);
      $('.phone').text(`Phone:${data.practice.phones[0]}`)
    }





  });


});
