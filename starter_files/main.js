let main = document.getElementById('main');
let input = document.getElementById('search');
let form = document.getElementById('searchForm');
let row2 = document.getElementById('row2');
let container = document.getElementById('container');
let audio = document.getElementById('music-player');


form.addEventListener("submit", function(){
  event.preventDefault();})

  let search = "https://itunes.apple.com/search?term=" + input.value + "&limit=20";

fetch(search)

  .then(function(response) {
      input.value = '';
    
      response.json().then(function(data) {
        console.log("Here is the data:", data);
        for (var i = 0; i < 20; i ++){


        row2.innerHTML += `<div id="container"><h2>${data.results[i].artistName}<br>${data.results[i].trackName}</h2><br>
        <img src="${data.results[i].artworkURL100}"></div>
        `
        container.addEventListener("click", function(event){
          console.log(event);
          audio.setAttribute("src", `${data.results[i].previewUrl}`)
        })
       }
      })
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
