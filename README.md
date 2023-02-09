# custom-audio-player
 A custom audio player using the HTML5 audio element and it's JavaScript API.  Be able to play audio files stored in a folder.

Personally use this to play customized music playlists or audiobooks. 

# Description

Audio player with a custom UI design to play music or audiobooks of your choice in a given folder. 

HTML5 includes the `<audio>` tag to embed audio into web pages. The attribute `controls` enables the default set of playback controls. Browser controls allow the user to control 
volume, seeking, and pause/resume playback.

The problem with native browser controls is that they are different in each browser - not good for cross-browser support. They also aren't very keyboard-accessible. The solution is to hide the native controls (removing `controls` attribute) and program your own with HTML, CSS, JavaScript. 

# Technologies:
HTML5, CSS3, JavaScript

# Instructions to Run

1. Clone this repo (or download as zip from GitHub)
2. Open it open and go to the directory its located
3. Open `index.html` to the browser of your choice
  * Bookmark the page

# How to use

To make a custom playlist: 

1. Place audio files in the `audio` folder.
2. Bonus: add their corresponding images with filenames named after their respective audio filename. For example, for `elevate.mp3` in the `audio` folder add `elevate.jpg` in the `img` folder. 
3. Open up `index.html`, and enjoy!

* As of now, only supports `.mp3` and `.jpg` file extensions.

# Specifications

- [x] Play/Pause functionality
- [x] Next/Prev audio 
- [ ] Progress Bar
- [ ] Display time in mins and seconds
- [x] Display customized audio player, styled with CSS
  - [x] song detail popup
  - [x] include spinning image 

Soon to add:
-[ ] Default image to play for audio files with no cover image
-[ ] Support file extensions `.flac` and image file extensions: `.png`, , `.gif`, `.webp`
-[ ] Randomize next
-[ ] Looper

# Attribution

Sample stock music files are made by Benjamin Tissot, found at [bensound](https://www.bensound.com/free-music-for-videos). 

Bensound.com/royalty-free-music