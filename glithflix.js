document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is fully loaded");
    const popularMoviesContainer = document.getElementById('popular-movies');
    if (!popularMoviesContainer) {
        console.error("The 'popular-movies' container doesn't exist.");
    }

    const movies = [
        {
            title: 'ECC GAMES',
            description: 'The Enclave Chemical Corps plays with the poor and whoever survives, wins big money.',
            image: 'image.png',
            link: 'comingsoon.html'
        },
        // Add more movie objects here
    ];

    function displayMovies(movies) {
        popularMoviesContainer.innerHTML = ''; 
        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            
            const movieImg = document.createElement('img');
            movieImg.src = movie.image;
            movieImg.alt = movie.title;
            
            const movieTitle = document.createElement('h3');
            movieTitle.textContent = movie.title;
            
            const watchNowButton = document.createElement('a');
            watchNowButton.href = movie.link;
            watchNowButton.textContent = 'Watch Now';
            watchNowButton.classList.add('button');
            
            movieDiv.appendChild(movieImg);
            movieDiv.appendChild(movieTitle);
            movieDiv.appendChild(watchNowButton);
            popularMoviesContainer.appendChild(movieDiv);
        });
    }

    displayMovies(movies);
});
