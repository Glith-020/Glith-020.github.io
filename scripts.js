document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audio-player");
    const playBtn = document.getElementById("play-btn");
    const stopBtn = document.getElementById("stop-btn");
    const volumeSlider = document.getElementById("volume-slider");
    const stationSelect = document.getElementById("station-select");

    const stations = {
        "Radio CHEM": ["Heartaches_By_The_Number_128kbps.mp3", "Fly_Me_To_The_Moon_2008_Remastered_128kbps.mp3", "Mr._Sandman_-_The_Chordettes_128kbps.mp3", "Ain_t_That_A_Kick_In_The_Head_Remastered_1997_128kbps.mp3", "My_Way_2008_Remastered_128kbps.mp3", "Blue_Moon_1999_Remastered_128kbps.mp3", "Way_Back_Home_128kbps.mp3"], // Replace with your songs
        "Enclave Radio": ["stars_and_stripes_forever_64kb.mp3", "dixie.mp3", "Hymn.mp3", "wash.mp3", "yan.mp3"]  // Replace with your songs
        // Add more stations and their songs as needed
    };

    let currentStation = null;
    let currentSongIndex = 0;

    // Play button click event
    playBtn.addEventListener("click", function() {
        if (!currentStation) {
            const selectedStation = stationSelect.value;
            currentStation = selectedStation;
            playRandomSong();
        } else {
            audioPlayer.play();
        }
    });

    // Stop button click event
    stopBtn.addEventListener("click", function() {
        audioPlayer.pause();
    });

    // Volume slider change event
    volumeSlider.addEventListener("input", function() {
        audioPlayer.volume = volumeSlider.value / 100;
    });

    // Listen for the ended event to play the next song
    audioPlayer.addEventListener("ended", function() {
        playRandomSong();
    });

    function playRandomSong() {
        const songs = stations[currentStation];
        const randomSongIndex = Math.floor(Math.random() * songs.length);
        const randomSong = songs[randomSongIndex];
        audioPlayer.src = randomSong;
        audioPlayer.play();
    }
});
