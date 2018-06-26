$(document).ready(function (){
});


let url = ''

function searchRepositories(searchTerms) {
  const searchTerms = $('#searchTerms').val()
  $.get (`https://api.github.com/search/repositories?q=${#searchTerms}` , data => {
      $('#results').html();
    })
    
}

let renderSearchResults = (data) => dta.items.map(results => renderSearchResults(result))

let renderSearchResults = (result) => 