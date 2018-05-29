import toStartGame from "./app";

 window.onload = function() { 
    let startButton = document.getElementById('startButton');
    let landingPage = document.getElementById('landing-page');
    let gamePage = document.getElementById('game-page');

    gamePage.style.display = "none";
    startButton.addEventListener('click', toStartGame);
    
   
   
 };
