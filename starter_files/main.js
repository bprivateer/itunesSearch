/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let main = document.getElementById('main');
let input = document.getElementById('search');
let form = document.getElementById('searchForm');
let row2 = document.getElementById('row2');
let container = document.getElementById('container');
let audio = document.getElementById('music-player');



form.addEventListener("submit", function(){
  event.preventDefault();

  let search = "https://itunes.apple.com/search?term=" + input.value + "&limit=20";

fetch(search)

  .then(

    function(response) {
      input.value = '';
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        console.log("Here is the data:", data);
        for (var i = 0; i < 20; i ++){



        let viewContent = document.createElement('div');
        viewContent.setAttribute("class", "container");

        let image =document.createElement('img');
        image.setAttribute("src", `${data.results[i].artworkUrl60}`)

        let artist = document.createElement('h3');
        artist.textContent = `${data.results[i].artistName}`;

        let track = document.createElement('h4');
        track.textContent = `${data.results[i].trackName}`;


        viewContent.appendChild(artist);
        viewContent.appendChild(track);
        viewContent.appendChild(image);
        row2.appendChild(viewContent);
        //  let contain = document.getElementById('container');

        let music = data.results[i].previewUrl;
        viewContent.addEventListener("click",function(e) {

        audio.setAttribute("src", music);

	      // audio.src = music;
        console.log("element clicked!");

         });

        }
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });



})
