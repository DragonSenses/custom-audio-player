const audioContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// audio files
const files = ['elevate', 'evolution', 'littleidea'];

// Keep track of file
let fileIndex = 0;

// Update file details
function loadFile(file){
  audio.src = `audio/${file}.mp3`;
  cover.src = `img/${file}.jpg`;
  title.innerText = file;
}

// Initially load file details into DOM
loadFile(files[fileIndex]);

// Play audio file
function playFile(){
  audioContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  
  audio.play();
}

// Pause audio file
function pauseFile(){
  audioContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

/**
 * Player goes to the previous song in the array. If
 * it is the first song then wrap to the last song.
 */
function prevFile(){
  fileIndex--;

  if(fileIndex < 0){
    fileIndex = files.length - 1;
  }

  loadFile(files[fileIndex]);

  playFile();
}

/**
 * Player goes to the next song in the array. If it is the
 * last song then wrap around to the first song.
 */
function nextFile(){
  fileIndex++;

  if(fileIndex > files.length -1){
    fileIndex ^= fileIndex;
  }

  loadFile(files[fileIndex]);

  playFile();
}

/* Event Listeners */
playBtn.addEventListener('click', () => {
  (audioContainer.classList.contains('play')) 
    ? pauseFile() : playFile();
});

// previous and next audio files
prevBtn.addEventListener('click', prevFile);
nextBtn.addEventListener('click', nextFile);
// audio ends
audio.addEventListener('ended', nextFile);