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

/**
 * Update the file details
 * @param {string} file name of the audio file to update details of
 */
function loadFile(file){
  audio.src = `audio/${file}.mp3`;
  cover.src = `img/${file}.jpg`;
  title.innerText = file;
}

// Initially load file details into DOM
loadFile(files[fileIndex]);

/**
 * Play audio file
 */
function playFile(){
  audioContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  
  audio.play();
}

/**
 * Pauses audio file
 */
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

/**
 * Update the progress bar
 * @param {*} e the event
 */
function updateProgress(e) {
  // Destructuring, extract variables from event source element
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

/* Event Listeners */
playBtn.addEventListener('click', () => {
  (audioContainer.classList.contains('play')) 
    ? pauseFile() : playFile();
});

/**
 * Update the progress bar
 * @param {Event} e 
 */
function updateProgress(e) {
  const { duration, currentTime } = e.target;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

/**
 * Sets the current play time of the audio file to correspond to the 
 * progress bar's width that the user has specified.
 * @param {Event} e progress bar event handler
 */
function setProgress(e){
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// previous and next audio files
prevBtn.addEventListener('click', prevFile);
nextBtn.addEventListener('click', nextFile);

// audio ends
audio.addEventListener('ended', nextFile);

// Time/audio update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar to set the time
progressContainer.addEventListener('click', setProgress);

/**
 * Support for using 'Space Bar' to play and pause audio file.
 * Added event listener to the document body instead.
 */
document.body.addEventListener('keydown', function(event){
  if(event.code == 'Space'){
    (audioContainer.classList.contains('play')) 
      ? pauseFile() : playFile();
  }
});

