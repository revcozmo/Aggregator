// get an api from seatGeek
// created Client ID with seatGeek
// 
// Aggregator
// Client ID:  NTc3MjcxNHwxNDc0NDk4NTQx
// Secret: u8sVtIcKXsxPJxTrt8WTfkfRLYCvHXjlDMt2TD3W
var currentResult; 
function displaySportInfo(sport,postal_code){
  //  var sport = 'soccer';
  // var postal_code = 08540;
  
  var queryURL = 'https://api.seatgeek.com/2/events?q='+sport+'&postal_code='+postal_code+'&client_id=NTc3MjcxNHwxNDc0NDk4NTQx&client_secret=u8sVtIcKXsxPJxTrt8WTfkfRLYCvHXjlDMt2TD3W';
  $.ajax({
    url:queryURL,
    method:'GET'
  })
  .done(function(response){

     currentResult = response;
    printSportInfo(currentResult);
   
  })
}
function printSportInfo(currentResult){
 // $('#seatgeek').html(JSON.stringify(currentResult));
    // console.log(sport);
    // console.log(sport.currentResult.url);
     console.log(currentResult.events[0].url);
    if(currentResult.meta.total>0){
        for (i=0; i>currentResult.meta.total; i++){
      $('#seatgeek').append(currentResult.events[i].url);
        

    }
  }
}





