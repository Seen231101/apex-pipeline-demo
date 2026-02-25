// simple navbar shrink effect
window.addEventListener("scroll", function(){
  document.querySelector(".navbar").style.padding =
  window.scrollY > 50 ? "10px 0" : "20px 0";
});