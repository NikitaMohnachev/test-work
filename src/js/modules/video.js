function addVideo () {
    const videoBtn = document.querySelector('.header__video-btn');
    const video = document.querySelector('.header__video')

    videoBtn.addEventListener('click', function() {
        videoBtn.classList.add('none');
        video.insertAdjacentHTML('afterbegin', '<iframe  src="https://www.youtube.com/embed/ZYTY0ceWlKM?si=BRvnHq0cxMOBk7Xr?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
    });
}

export default addVideo;