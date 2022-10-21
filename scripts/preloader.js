// On load
window.addEventListener("load", hidePreloader);


// Hide Preloader
function hidePreloader(){
   let preloDiv = document.querySelector("#preloader");
   let body = document.body;

   preloDiv.classList.add("loaded"); 
   body.classList.remove('unloaded');
}