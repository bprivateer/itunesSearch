/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let container = document.getElementById('container');
let input = document.getElementById('search');
let form = document.getElementById('searchForm');

form.addEventListener("submit", function(){
  console.log("value");


  let search = "https://itunes.apple.com/search?term=" + input.value + "&limit=25";

fetch(search)

  .then(

    function(response) {

      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        console.log("Here is the data:", data);
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });


  // fetch("https://itunes.apple.com/term?=jack+johnson")
  // .then(function(response) {
  //   console.log(response);
  //   response.json().then(function(data) {
  //     console.log(data);
      // for (var i = 0; i < 8; i++ ){
      //   if (data.results[i].thumbnail === ""){
      //     container.innerHTML += `<div id="row2"><h3><a href="${data.results[i].href}">${data.results[i].title}</a></h3><br>
      //     <img src="http://via.placeholder.com/100x100"></div>
      //     `
      //   } else {
      //     container.innerHTML += `<div id="row2"><h3><a href="${data.results[i].href}">${data.results[i].title}</a></h3><br>
      //     <img src="${data.results[i].thumbnail}"></div>
      //     `
      //
      //   }
      //
      //
      // }
      // console.log(search);
      // console.log(data.results);
//     });
//   }
// )
// .catch(function(err) {
//   console.log("Fetch Error :-S", err);
// });
//
//
// console.log("doneeeeeeee");

})
