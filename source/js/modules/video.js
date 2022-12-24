const setupVideo = () => {
  let link = document.querySelector('.gym__link');
  let button = document.querySelector('.gym__button');
  let video = document.querySelector('.gym__video-wrapper');

  button.addEventListener('click', () => {
    let iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
    video.classList.remove('gym__video-wrapper--image-enabled');
    video.classList.add('gym__video-wrapper--video-enabled');
  });

  link.removeAttribute('href');
  video.classList.add('gym__video-wrapper--enabled');
};

const createIframe = () => {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('frameborder', '0');
  iframe.classList.add('gym__iframe');
  iframe.setAttribute('width', '1206');
  iframe.setAttribute('height', '768');


  return iframe;
};

export {setupVideo};
