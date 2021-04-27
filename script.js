

$(document).ready(()=>{
    $('#serachForm').on('submit',(e) =>{
        let searchText = ($('#searchText').val());
        findMovies(searchText);

        e.preventDefault();
    })
})


function findMovies(searchText){
fetch('http://www.omdbapi.com/?apikey=230e6d60&s='+searchText)
.then((response) =>  
response.json()

)

.then((data) => {
console.log(data.Search)
// This returns a full array object of data

let result = '<h2>  API</h2>';

(data.Search).forEach((movie) => {
console.log(movie);



result +=`
  <div >
   <img src= "${movie.Poster}">
   
    <h1>${movie.Title} </h1>
    <h2>${movie.Year} </h2>
    <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href ="#">Movie Details</a>
    </div>`;

  

});
document.getElementById('movies').innerHTML =result;
});

}

function movieSelected(id){
sessionStorage.setItem('movieID',id);
window.location = 'main.html';
return false;
}
function getMovie(){

let movieID =sessionStorage.getItem('movieID');

fetch('http://www.omdbapi.com/?apikey=230e6d60&i='+movieID)
.then((response) =>{  response.json()
console.log(response);


let movie = response.data;

console.log(movie)
// let output =`

// <div class="row">
// <div>
// <img src= "${movie.Poster}" class="thumbnail>

// </div>
// </div>

// `;
})
}