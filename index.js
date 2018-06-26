$(document).ready(function (){
});

let seachTerms = ''
let url = ''

function findGIFS(searchTerms) {
    $.ajax({
    url: 'https://api.giphy.com/v1/gifs/search',
    dataType: "json", // informs $.ajax what the type of data we are expecting back will be
    data: { 
      api_key: 'CqNVJSuyFVcqviUl6VHCtqea80w0ZCXX',
      q: input, 
      limit: 3, 
      rating: 'PG-13' 
    },
    success: resp => {
        url = resp.data['0'].embed_url
        $('#results').html(`<iframe src=${url}>`)
    }
  })
}

