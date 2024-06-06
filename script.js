// console.log("hello deepu bhai ")
var songIndex=0;
var audioElement= new Audio("Dhoomtaana.mp3")
var play = document.getElementById('Masterplay')
var gif = document.getElementById("gif")
var MyProgressBar = document.getElementById('MyProgressBar')
var next = document.getElementById('next')
var forward = document.getElementById('forward')
// var SongName = document.getElementById('forward')
// addEventListener(play)
// audioElement.play();
let song= 
[
    {songName:"dhoom tana - OM SHANTI OM", songPath:"Dhoomtaana.mp3",coverPateh:"omsom.jpeg"},
    {songName:"bewfa - NIKHIL", songPath:"Bewafa-Bewafa-Bewafa-Nikli-Hai-Tu(PagalWorld).mp3",coverPateh:"1.jpg"},
    {songName:"Bekaar-Dil - FIGHTER", songPath:"Bekaar-Dil-(Fighter)(PagalWorld).mp3",coverPateh:"2.jpg"},
    {songName:"Hasti rahe tu", songPath:"Hasti-Rahe-Tu---Ajay-Malakar(PagalWorld).mp3",coverPateh:"3.jpg"},
    {songName:"Hum-Haar-Gaye-Is-Dil-Se", songPath:"Hum-Haar-Gaye-Is-Dil-Se(PagalWorld).mp3",coverPateh:"4.jpg"},
    {songName:"Salaam-Rocky-Bhai", songPath:"Salaam-Rocky-Bhai(PagalWorld).mp3",coverPateh:"5.jpg"},
    {songName:"Nanna-Re-Na-Re", songPath:"Nanna-Re-Na-Re-(Kgf-Mother)(PagalWorld).mp3",coverPateh:"6.jpg"},
    {songName:"Tum-Se", songPath:"Tum-Se(PagalWorld).mp3",coverPateh:"7.jpg"},
    {songName:"Yaar-Tera-Superstar-Desi-Kalakaar", songPath:"Yaar-Tera-Superstar-Desi-Kalakaar(PagalWorld).mp3",coverPateh:"8.jpg"},
    {songName:"Aarambh-Hai-Prachand", songPath:"Aarambh-Hai-Prachand-X-Polozehni(PagalWorld).mp3",coverPateh:"9.jpg"},
]

Masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<0)
        {
            audioElement.play();
            Masterplay.classList.remove('fa-play-circle');
            Masterplay.classList.add('fa-pause-circle');
            gif.style.opacity=1;

        }
    else
        {
            audioElement.pause()
            Masterplay.classList.add('fa-play-circle');
            Masterplay.classList.remove('fa-pause-circle');
            gif.style.opacity=0;

        }

})
//next button
next.addEventListener('click',()=>{
    songIndex=(songIndex+1)%song.length
    audioElement.src=song[songIndex].songPath
    audioElement.play()
    Masterplay.classList.remove('fa-play-circle');
    Masterplay.classList.add('fa-pause-circle');
    progress=0
    gif.style.opacity=1;
})
// forward buttom
forward.addEventListener('click',()=>{
    songIndex=(songIndex-1)%song.length
    audioElement.src=song[songIndex].songPath
    audioElement.play()
    Masterplay.classList.remove('fa-play-circle');
    Masterplay.classList.add('fa-pause-circle');
    progress=0
    gif.style.opacity=1;})

audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate")
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
    console.log(progress)
    
    //update seekbar
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
