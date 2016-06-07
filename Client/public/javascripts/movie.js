$.ajax({
url:'/readjson',
datatype:'json',
type:'get',
cache:false,
success:function(data){
var jsonData = $.parseJSON(data);
console.log(jsonData);
var count=0;
if(count==0){
  getData();
}
$("#next").click(function() {
  if(count < jsonData.length){
    count++;
      getData();
    }
});
$("#prev").click(function() {
  if(count>0){
    count--;
      getData();
    }
});
function getData()
{
  $('#img').attr("src", jsonData[count].Poster);
  $('#title').html('<p> Title: ' + jsonData[count].Title + '</p>');
  $('#year').html('<p> Year: ' + jsonData[count].Year + '</p>');
  $('#actors').html('<p> Actors: ' + jsonData[count].Actors + '</p>');
  $('#director').html('<p> Director: ' + jsonData[count].Director + '</p>');
  $('#desc').html('<p> Description: ' + jsonData[count].Plot + '</p>');
  $('#date').html('<p> Date Released: ' + jsonData[count].Released + '</p>');
  $('#imdbRating').html(jsonData[count].imdbRating);
  $('#Awards').html(jsonData[count].Awards);
  $('#deleteTitle').val(jsonData[count].Title);

  $("#updateDetails").click(function(){
      $('#title1').val(jsonData[count].Title);
      $('#img1').val(jsonData[count].Poster);
      $('#year1').val(jsonData[count].Year);
      $('#actors1').val(jsonData[count].Actors);
      $('#director1').val(jsonData[count].Director);
      $('#desc1').val(jsonData[count].Plot);
      $('#date1').val(jsonData[count].Released);
      $('#imdbRating1').val(jsonData[count].imdbRating);
      $('#Awards1').val(jsonData[count].Awards);
    });
}
}
});
