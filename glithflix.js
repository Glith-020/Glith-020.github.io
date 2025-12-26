document.addEventListener('DOMContentLoaded', () => {
    const popularMoviesContainer = document.getElementById('popular-movies');
    if (!popularMoviesContainer) {
        console.error("The 'popular-movies' container doesn't exist.");
        return; // Exit early if container doesn't exist
    }

    const movies = [
        {
            title: 'Brotherhood vs Enclave',
            description: 'A recording of a battle between two factions of the fallout universe.',
            image: 'image.png',
            link: 'battle.html'
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
            link: 'fleshpit2.html' // Update the link to the page for The Flesh Pit movie
        },
         {
            title: 'SCP: TESTS',
            description: 'Footage of multiple events going around the S.C.P. Facility.',
            image: 'SCP TESTS.png', // Use the appropriate image path here
            link: 'series.html' // Update the link to the page for The Flesh Pit movie
        },
        {
            title: 'TRIUMPH OF THE TRIPODS',
            description: 'A short format film about War of The Worlds',
            image: 'New Project (50).png', // Use the appropriate image path here
            link: 'tripod.html' // Update the link to the page for The Flesh Pit movie
        },
          {
            title: 'THE SURFACE',
            description: 'In a world where the ground is scorched and the heavens no longer hear our cries, the angels walk among the ruins not as guardians, but as hunters, sent to erase what God has abandoned. The cities lie silent beneath ash-choked skies, their spires broken like the promises once whispered in prayer.',
            image: 'cfewcrfew.png',
            link: 'surface.html'
        },
        // You can add more movie objects here if needed
    ];

    function displayMovies(movies) {
    popularMoviesContainer.innerHTML = ''; 
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        
        // Make image a clickable link
        const movieLink = document.createElement('a');
        movieLink.href = movie.link;
        movieLink.style.display = 'block';
        movieLink.style.textDecoration = 'none';
        
        const movieImg = document.createElement('img');
        movieImg.src = movie.image;
        movieImg.alt = movie.title;
        movieImg.loading = 'lazy'; // Native lazy loading
        
        movieLink.appendChild(movieImg);
        
        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;
        
        const watchNowButton = document.createElement('a');
        watchNowButton.href = movie.link;
        watchNowButton.textContent = 'Watch Now';
        watchNowButton.classList.add('button');
        
        movieDiv.appendChild(movieLink);
        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(watchNowButton);
        popularMoviesContainer.appendChild(movieDiv);
    });
}

    displayMovies(movies);
});
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
    }
});
// Header scroll effect
// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('header');
const body = document.body;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
        body.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        body.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});
