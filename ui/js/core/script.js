//toggle screen to full screen


export function toggleScreen() {
  function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
launchIntoFullscreen(document.getElementById("mag-reader-container"));

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
// Cancel fullscreen
exitFullscreen();
}




//search button
var button = document.getElementById("search");
var input = document.getElementById("search_input");
var form = document.getElementById("search-form");

// var dispStatus= input.style.display
// var hideInput= button.removeChild(input);

// var permission = true;
button.addEventListener("click", appear);

// export function appear() {
//   var div = document.getElementById("search_input");
//   if ( div.style.display == "block"){
//     div.style.display="none";
//     form.removeAttribute("className", "form_prop");
//   }else{
//     div.style.display="block";
//     form.setAttribute("className", "form_prop");
//   }
