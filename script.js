

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

.then((response) => {
    response.json()
    let imdb =response.data;

    console.log(imdb)



})





// .then((data) =>{

//     let outpput1 =' <h2>  API</h2>';

//     let cost = data;
//     (cost).forEach((imdb)=>{
//         outpput1 +=`

//         <div class="row">
//         <h3>${imdb.Actors} </h3>
//         </div>
//         `;
//     });

//     document.getElementById('movie').innerHTML = outpput1;

// });






 








}


// Actors: "Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard"
// Awards: "Nominated for 2 Oscars. Another 11 wins & 4 nominations."
// BoxOffice: "$285,761,243"
// Country: "USA"
// DVD: "25 Nov 2015"
// Director: "Chris Columbus"
// Genre: "Comedy, Family"
// Language: "English"
// Metascore: "63"
// Plot: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
// Poster: "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
// Production: "20th Century Fox, Hughes Entertainment"
// Rated: "PG"
// Ratings: (3) [{…}, {…}, {…}]
// Released: "16 Nov 1990"
// Response: "True"
// Runtime: "103 min"
// Title: "Home Alone"
// Type: "movie"
// Website: "N/A"
// Writer: "John Hughes"
// Year: "1990"
// imdbID: "tt0099785"
// imdbRating: "7.6"
// imdbVotes: "494,710"