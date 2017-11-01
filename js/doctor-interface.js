var apiKey = require('./../.env').apiKey;
import { DoctorSearch } from './../js/doctor.js'

$(document).ready(function() {
  $('#searchParam').click(function() {
    debugger
    let userSearch = $('#search').val();
    $('#search').val("");
    $('#results').text("");

    let doctorSearch = new DoctorSearch
    doctorSearch.call(userSearch);

  });
});
