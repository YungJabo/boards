
const videoEl = $('.video')[0];


videoEl.load();


const delay = () =>{




const playBtn = $('.button-play');
const durationBtn = $('.player__playback-button');
const splashContainer = $('.player__splash');
const playIcon = $('.icon--play');
const pauseIcon = $('.icon--paused');
const playerPlayback = $('.player__playback');
const volumeBtn = $('.player__mute-btn');
const completeTime = $('.player__duration-completed');
const estimateTime = $('.player__duration-estimate');

videoEl.volume = 0.5;
var volume = videoEl.volume;

$('.player__volume-button').css({
    left: `47%`
})
$('.player__volume-yellow').css({
    width: `56%`
})
$('.player__volume-button').click(e=>{
    e.preventDefault();
})
const volumeLvl = $('.player__volume-lvl');
const durationSec = videoEl.duration;
playerPlayback.click(e=>{
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    const newButtonPosition = (clickedPosition/bar.width()) * 100;
    durationBtn.css({
        left: `${newButtonPosition-2}%`
    })
    const newPlaybackPosition = (durationSec/100)*newButtonPosition;
    videoEl.currentTime = newPlaybackPosition;


    
})

interval = setInterval(()=>{
    const completedSec = videoEl.currentTime;
    const completedPer = (completedSec/durationSec)*100;
    durationBtn.css({
        left: `${completedPer}%`
    });
    $('.player__playback-yellow').css({
        width: `${completedPer+3}%`
    });
   
},400)
const hideContainer = container =>{
    if(container.hasClass('player__splash--active')){
        container.removeClass('player__splash--active');

    }
    else{
        container.addClass('player__splash--active')
    }
}
const playVideo = ()=>{
    if(videoEl.paused){
        hideContainer(splashContainer);
        videoEl.play();
        playIcon.addClass('icon--none');
        pauseIcon.removeClass('icon--none');
    }
    else{
        hideContainer(splashContainer);
        videoEl.pause();
        playIcon.removeClass('icon--none');
        pauseIcon.addClass('icon--none');
    }
}
playBtn.click(e=>{
    playVideo();
})
splashContainer.click(e=>{
    playVideo();
})
volumeBtn.click(e=>{
    e.preventDefault();
    if(videoEl.volume==0){
        videoEl.volume=volume;
    }
    else{
        videoEl.volume=0;
    }
    
})

$('.player__volume-lvl').click(e=>{
    const volumeBar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    const newVolumePosititon = (clickedPosition/volumeBar.width())*100;
    $('.player__volume-button').css({
        left: `${newVolumePosititon-5}%`
    })
    if(newVolumePosititon>100){
        videoEl.volume=1;
    }
    else{
    videoEl.volume = newVolumePosititon/100;
    
    }
    volume=videoEl.volume;
    $('.player__volume-yellow').css({
        width: `${newVolumePosititon+1}%`
    })
    
})


durationInterval = setInterval(()=>{

    
    const completedSecAll = Math.round(videoEl.currentTime);
    const completedMin = parseInt(completedSecAll/60);
    const completedSec = (completedSecAll-completedMin*60);
    var completedMinStr="";
    var completedSecStr="";
    
    if(completedMin<10){
        completedMinStr=`0${completedMin}`;
        
    }
    else{
        completedMinStr = `${completedMin}`;
    }

    if(completedSec<10){
        completedSecStr=`0${completedSec}`;
    }
    else{
        completedSecStr = `${completedSec}`;
    }
    completeTime.text(`${completedMinStr}:${completedSecStr}`);

    const estimateSecAll = Math.round(durationSec);
    const estimateMin = parseInt(estimateSecAll/60);
    const estimateSec = (estimateSecAll-estimateMin*60);
    var estimateMinStr="";
    var estimateSecStr="";
    
    if(estimateMin<10){
        estimateMinStr=`0${estimateMin}`;
        
    }
    else{
        estimateMinStr = `${estimateMin}`;
    }

    if(estimateSec<10){
        estimateSecStr=`0${estimateSec}`;
    }
    else{
        estimateSecStr = `${estimateSec}`;
    }
    estimateTime.text(`${estimateMinStr}:${estimateSecStr}`);

    
},10)
}

setTimeout(delay,2500);