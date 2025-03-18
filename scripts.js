document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playBtn = document.getElementById("play-btn");
    const stopBtn = document.getElementById("stop-btn");
    const volumeSlider = document.getElementById("volume-slider");
    const stationSelect = document.getElementById("station-select");

    const stations = {
        "Radio CHEM": [
            "Heartaches_By_The_Number_128kbps.mp3",
            "Fly_Me_To_The_Moon_2008_Remastered_128kbps.mp3",
            "Mr._Sandman_-_The_Chordettes_128kbps.mp3",
            "Ain_t_That_A_Kick_In_The_Head_Remastered_1997_128kbps.mp3",
            "My_Way_2008_Remastered_128kbps.mp3",
            "Blue_Moon_1999_Remastered_128kbps.mp3",
            "Way_Back_Home_128kbps.mp3"
        ],
        "Enclave Radio": [
            "stars_and_stripes_forever_64kb.mp3",
            "dixie.mp3",
            "Hymn.mp3",
            "wash.mp3",
            "yan.mp3"
        ]
    };

    let currentStation = stationSelect.value;
    let shuffledPlaylist = [];
    let currentSongIndex = 0;

    // Fisher-Yates Shuffle
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Load and play current song
    function playCurrentSong() {
        if (shuffledPlaylist.length === 0) return;
        audioPlayer.src = shuffledPlaylist[currentSongIndex];
        audioPlayer.play();
    }

    // Load next song on end
    function playNextSong() {
        currentSongIndex++;
        if (currentSongIndex >= shuffledPlaylist.length) {
            shuffledPlaylist = shuffleArray(stations[currentStation]);
            currentSongIndex = 0;
        }
        playCurrentSong();
    }

    // Station change
    stationSelect.addEventListener("change", function () {
        currentStation = stationSelect.value;
        shuffledPlaylist = shuffleArray(stations[currentStation]);
        currentSongIndex = 0;
        playCurrentSong();
    });

    // Play/Pause toggle
    playBtn.addEventListener("click", function () {
        if (audioPlayer.paused) {
            if (!shuffledPlaylist.length) {
                shuffledPlaylist = shuffleArray(stations[currentStation]);
                currentSongIndex = 0;
                playCurrentSong();
            } else {
                audioPlayer.play();
            }
        } else {
            audioPlayer.pause();
        }
    });

    // Update Play Button Text
    audioPlayer.addEventListener("play", () => playBtn.textContent = "Pause");
    audioPlayer.addEventListener("pause", () => playBtn.textContent = "Play");

    // Stop Button
    stopBtn.addEventListener("click", function () {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });

    // Volume Control
    volumeSlider.addEventListener("input", function () {
        audioPlayer.volume = volumeSlider.value / 100;
    });

    // Auto play next song
    audioPlayer.addEventListener("ended", playNextSong);

    // Preload songs (optional)
    Object.values(stations).flat().forEach(src => {
        const audio = new Audio();
        audio.src = src;
        audio.load();
    });

    // Initialize default station
    shuffledPlaylist = shuffleArray(stations[currentStation]);
});
