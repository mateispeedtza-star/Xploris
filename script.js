const video = document.getElementById('video');
const readout = document.getElementById('readout');
const timelineItems = Array.from(document.querySelectorAll('#timeline li'));

function formatTime(seconds) {
  if (!isFinite(seconds)) return '00:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateReadout() {
  readout.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
}

function updateActiveTimelineItem() {
  const t = video.currentTime;
  let current = null;
  for (const item of timelineItems) {
    const itemTime = parseFloat(item.dataset.time);
    if (itemTime <= t) current = item;
  }
  timelineItems.forEach(item => item.classList.toggle('active', item === current));
}

timelineItems.forEach(item => {
  item.addEventListener('click', () => {
    const time = parseFloat(item.dataset.time);
    video.currentTime = time;
    video.play();
  });
});

video.addEventListener('loadedmetadata', updateReadout);
video.addEventListener('timeupdate', () => {
  updateReadout();
  updateActiveTimelineItem();
});
