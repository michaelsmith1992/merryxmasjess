console.log("merry xmas");
// window.onload = function() {
//     document.getElementById("audio").play();
// }


document.querySelector("#another").addEventListener("click", ()=> {
    console.log("another");
    var x = document.getElementById("myAudio"); 
  x.play(); 
    var elem = document.querySelector("#santa");   
  let pos = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
      window.location.href = "./another.html";
    } else {
      pos++; 
      elem.style.left = pos + 'px'; 
    }
  }
});


