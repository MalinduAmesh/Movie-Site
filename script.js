

        $(document).ready(()=>{
            $('#serachForm').on('submit',(e) =>{
                let searchText = ($('#searchText').val());
                findMovies(searchText);
        
                e.preventDefault();
            })
        })
        document.getElementById('getText').addEventListener('click',getText);
        

function findMovies(searchText){
    fetch('http://www.omdbapi.com/?apikey=7786aefd&s='+searchText)
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
            </div>`;

          
  
});
document.getElementById('movies').innerHTML =result;
});

}