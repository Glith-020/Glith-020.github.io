document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.play-button');
    const movieDetailSection = document.querySelector('.movie-detail');
    const videoPlayerSection = document.getElementById('videoPlayer');
    const movieVideo = document.getElementById('movieVideo');

    playButton.addEventListener('click', function() {
        movieDetailSection.style.display = 'none';
        videoPlayerSection.style.display = 'block';
        movieVideo.play();
    });
});
