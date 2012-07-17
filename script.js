var db = '', 
    collection = '',
    restURL = 'http://localhost:8888/api/';
    restURL = 'http://localhost:27080/';

function updateDbValues(){
  db = $('#database')[0].value;
  collection = $('#collection')[0].value;
}     
function findButtonClicked(evt){
  updateDbValues();
  $.ajax({
    url: restURL + db + '/' + collection + '/_find',
    type: 'GET',
    dataType: 'jsonp',
    success:  function(data) { 
                $('#resultado').html(JSON.stringify(data.results));
              }
  });
}

function insertButtonClicked(evt){
  updateDbValues();
  $.post( restURL + db + '/' + collection + '/_insert',
          'docs=['+encodeURI($('#newelement')[0].value)+']',
          function(data) { 
            $('#resultado').html(data.results);
          });
}

jQuery(document).ready(function($) {
  $('#find').click(findButtonClicked);
  $('#insert').click(insertButtonClicked);
});