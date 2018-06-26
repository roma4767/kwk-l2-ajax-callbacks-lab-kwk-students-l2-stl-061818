$(document).ready(function (){
});

let input = ''
let url = ''

function findGIFS(input) {
    $.ajax({
    url: 'https://api.giphy.com/v1/gifs/search',
    dataType: "json", // informs $.ajax what the type of data we are expecting back will be
    data: { // holds our request parameters in key: value form
      api_key: 'CqNVJSuyFVcqviUl6VHCtqea80w0ZCXX', // our app specific key
      q: input, // the search query itself
      limit: 3, // limit to 3 GIF result
      rating: 'PG-13' // limits our results to everything PG-13 and under 
    },
    success: resp => {
        url = resp.data['0'].embed_url
        $('#firstDiv').html(`<iframe src=${url}>`)

        url = resp.data['1'].embed_url
        $('#secondDiv').html(`<iframe src=${url}>`)

        url = resp.data['2'].embed_url
        $('#thirdDiv').html(`<iframe src=${url}>`)
    }
  })
}