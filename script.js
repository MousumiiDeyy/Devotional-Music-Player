window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(images/banner1.jpg)";
    bannerImage.setAttribute("src", "images/iimg1.jpg");
    bannerHeading.textContent = "Devotional Melodies";
    bannerText.textContent = "Keep your focus and enjoy the serenity";
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "Songs/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
        
        banner.style.backgroundImage = "url(images/banner1.jpg)";
        bannerImage.setAttribute("src", "images/iimg1.jpg");
        bannerHeading.textContent = "Devotional Melodies";
        bannerText.textContent = "Keep your focus and enjoy the serenity";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
       
        if (songNumber === 1) {
            banner.style.backgroundImage = "url(images/img5.jpg)";
            bannerImage.setAttribute("src", "images/img6.jpg");
            bannerHeading.textContent = "Shiv Tandav Stotram";
            bannerText.textContent = "By Sachet Tandon · Parampara Tandon";
        } else if (songNumber === 2) {
            banner.style.backgroundImage = "url(images/img1.jpg)";
            bannerImage.setAttribute("src", "images/img7.jpg");
            bannerHeading.textContent = "Adharam Madhuram";
            bannerText.textContent = "By Swasti Mehul";
        }
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(images/img2.jpg)";
            bannerImage.setAttribute("src", "images/img3.jpg");
            bannerHeading.textContent = "Aigiri Nandini";
            bannerText.textContent = "By Rajalakshmee Sanjay";
        }
        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(images/img11.jpg)";
            bannerImage.setAttribute("src", "images/img12.jpg");
            bannerHeading.textContent = "Shri Hari Stotram";
            bannerText.textContent = "By G. Gayathri Devi · Saindhavi · Priya · R. Shruti";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(images/img9.jpg)";
            bannerImage.setAttribute("src", "images/img10.jpg");
            bannerHeading.textContent = "Hanuman Chalisa";
            bannerText.textContent = "By Gulshan Kumar";
        }
        
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
    }
}