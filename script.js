const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
    const video = document.querySelector('video');
const playerButton = document.querySelector('.player__button');
const progressFilled = document.querySelector('.progress__filled');

function togglePlay() {
    if (video.paused) {
        video.play();
        playerButton.textContent = '❚❚';
    } else {
        video.pause();
        playerButton.textContent = '►';
    }
}

playerButton.addEventListener('click', togglePlay);

video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.flexBasis = `${percent}%`;
});

const rewind = document.querySelector('[data-skip="-10"]');
const skip = document.querySelector('[data-skip="25"]');

rewind.addEventListener('click', () => {
    video.currentTime -= 10;
});

skip.addEventListener('click', () => {
    video.currentTime += 25;
});
