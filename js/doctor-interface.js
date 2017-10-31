var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#searchParam').onlick(function() {
    let userSearch = $('#search').val();
    $('#search').val("");
  }  
});
