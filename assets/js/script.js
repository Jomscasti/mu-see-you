var videoModal = document.getElementById('videoModal');
var videoPlayer = document.getElementById('videoPlayer');
var videoUrl = "https://www.youtube.com/embed/JhTfL_tZbOI?si=5vScVrDzY46kTXDO&autoplay=1";

videoModal.addEventListener('shown.bs.modal', function () {
    videoPlayer.src = videoUrl;
});

videoModal.addEventListener('hidden.bs.modal', function () {
    videoPlayer.src = "";
});