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
        {
            title: 'THE FLESH PIT',
            description: 'A short movie about the dangers of the Mystery Flesh Pit National Park.',
            image: 'FLESHB.png', // Use the appropriate image path here
            link: 'THE FLESH PIT.html' // Update the link to the page for The Flesh Pit movie
        },
        {
            title: 'THE FLESH PIT 2',
            description: 'A group of rangers notices a dissapearance and goes deep down to discover the truth.',
            image: 'flesh2.png', // Use the appropriate image path here
            link: 'fleshsoon.html' // Update the link to the page for The Flesh Pit movie
        },
        
        // You can add more movie objects here if needed
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
