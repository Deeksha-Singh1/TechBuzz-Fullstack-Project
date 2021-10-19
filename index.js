document.querySelector("div").addEventListener("click", e=>{
  responsiveVoice.speak(document.querySelector("input").value, "Hindi Female");

})