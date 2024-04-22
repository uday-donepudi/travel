document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.vid-btn');
    const videoSlider = document.getElementById('video-slider');
    let currentVideoIndex = 0;
  
    function playVideo(index) {
      const videoSrc = videos[index].getAttribute('data-src');
      videoSlider.src = videoSrc;
      videoSlider.play();
    }
  
    function setActiveVideo(index) {
      videos.forEach((video, idx) => {
        video.classList.remove('active');
        if (idx === index) {
          video.classList.add('active');
        }
      });
    }
  
    function autoSwipe() {
      setInterval(() => {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        playVideo(currentVideoIndex);
        setActiveVideo(currentVideoIndex);
      }, 5000); // Change this value to adjust the interval between swipes
    }
  
    videos.forEach((video, index) => {
      video.addEventListener('click', () => {
        currentVideoIndex = index;
        playVideo(currentVideoIndex);
        setActiveVideo(currentVideoIndex);
      });
    });
  
    autoSwipe(); // Start automatic swiping
  });
  