$(document).ready(function (){
});

const searchTerms = ''
let url = ''

function searchRepositories(searchTerms) {
  $('#searchTerms').val()
  $.get ('https://api.github.com/search/repositories?q=')
    $('#searchTerms'); , data => {
      $('#results').html();
    }
    
}