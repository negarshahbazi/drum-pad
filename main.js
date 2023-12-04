let keyBoard = ["A", "Z", "E", "Q", "S", "D", "W", "X", "C"];
let key = document.querySelectorAll(".key");
let audio = document.querySelectorAll("audio");

for (let i = 0; i < keyBoard.length; i++) {
  document.addEventListener("keydown", element);
  function element(code) {
    if (code.key.toUpperCase() === keyBoard[i]) {
      key[i].classList.add("playing");
      audio[i].play();
    }
  }
  document.addEventListener("keyup", stopMusic);
  function stopMusic() {
    key[i].classList.remove("playing");
    audio[i].pause();
    audio[i].currentTime=0;


  }
}
