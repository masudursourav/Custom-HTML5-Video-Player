const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButton = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");


function togglePlay(){
    video.paused ? video.play() : video.pause();
}

function updateButton(){
        toggle.textContent = this.paused ? "▶️" : "⏸️";

}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
   video[this.name] = this.value;
}


video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
toggle.addEventListener('click',togglePlay);
skipButton.forEach(button => button.addEventListener('click',skip));
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));