
document.addEventListener("DOMContentLoaded",playerInit);

function playerInit(){
    let audioPlayers = document.querySelectorAll(".audio-player");
    for(let i = 0; i < audioPlayers.length; i++){
        audioInit(audioPlayers[i]);
    }
}

function audioInit(audioPlayer){
    let audioSource = audioPlayer.getElementsByTagName("audio")[0];
    let playButton = audioPlayer.getElementsByClassName("play")[0];
    let pauseButton = audioPlayer.getElementsByClassName("pause")[0];
     
    if(audioSource.hasAttribute('autoplay')){
        audioSource.volume = 0.2;
    }
 
    audioSource.onended = () => {
        switchElements(true, playButton, pauseButton);
        console.log("audioEnded");

    };   

    playButton.addEventListener("click",function(){
        if(playButton.classList.contains('ap-start-over')){
            audioSource.currentTime = 0;
            console.log("startover");
        }
        audioSource.play();
        switchElements(isPlaying(audioSource), playButton, pauseButton)
    })
    pauseButton.addEventListener("click",function(){
        switchElements(isPlaying(audioSource), playButton, pauseButton)
        audioSource.pause();
    })
    
    /* Disable on hide [Status: Not Working]
    audioPlayer.addEventListener("visibilitychange", () => {
        switchElements(isPlaying(audioSource), playButton, pauseButton)
        audioSource.pause();
        audioSource.currentTime = 0;
    })*/
}

function switchElements(state, onElement , offElement){

    if(state){
        onElement.classList.remove('hidden');
        offElement.classList.add('hidden');
    }else{
        offElement.classList.remove('hidden');
        onElement.classList.add('hidden');
    }
}

function isPlaying (audio) {
    return audio
        && audio.currentTime > 0
        && !audio.paused
        && !audio.ended
        && audio.readyState > 2;
}