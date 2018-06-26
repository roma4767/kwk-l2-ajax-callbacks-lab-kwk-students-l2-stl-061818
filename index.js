$(document).ready(function (){
});

let seachTerms = ''
let url = ''

function searchRepositories(searchTerms) {
    $.ajax({
    url: 'https://api.giphy.com/v1/gifs/search',
    dataType: "json",
    data: { 
      api_key: 'CqNVJSuyFVcqviUl6VHCtqea80w0ZCXX',
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
