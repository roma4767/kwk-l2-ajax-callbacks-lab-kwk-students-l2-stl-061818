$(document).ready(function (){
});

let seachTerms = ''
let url = ''

function searchRepositories(searchTerms) {
  $.get('searchTerms.click')
  $.ajax ({
    url: 'https://developer.github.com/v3/',
    dataType: "json",
    data: { 
      respository_name: 'Name',
      q: searchTerms, 
      limit: 3, 
      rating: 'PG-13' 
    },
    success: resp => {
        url = resp.data['0'].embed_url
        $('#results').html(`<iframe src=${url}>`)
    }
  })
}

$('#submitButton').click(function() {
    input = $('#searchText').val();
    console.log(searchTerms)
    searchRepositories(searchTerms)
})
