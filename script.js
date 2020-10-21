const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, pass video element,then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Error Here
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    //  Start picture in picture
    await videoElement.requestPictureInPicture();
    // reset buttton
    button.disabled = false;
});

//  on Load
selectMediaStream();