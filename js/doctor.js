var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#searchParam').click(function() {
    let userSearch = $('#search').val();
    $('#search').val("");

    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${userSearch}&skip=2&limit=10&user_key=` + apiKey;







  })


})


var url =
