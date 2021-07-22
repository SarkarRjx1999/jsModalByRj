'use strict';
const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

const cls = document.querySelector(".close-modal");

const open = document.querySelectorAll(".show-modal");

//console.log(open);

for(let i=0;i<open.length;i++){
  open[i].addEventListener('click' ,function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

const close = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

cls.addEventListener("click",close);
overlay.addEventListener("click",close);

document.addEventListener("keypress",function(e){
  console.log(e.key);
  if(e.key === "Escape" && !modal.classList.contains("hidden")){
    close();
  }
});