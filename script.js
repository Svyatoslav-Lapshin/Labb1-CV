const btn= document.getElementById("colorBtn");

//Looking if light theme is saved
if(localStorage.getItem("theme")=="enabled"){
  document.body.classList.add("light-background");
}

btn.addEventListener("click", function(){
    //Change color justr now
    document.body.classList.toggle("light-background");

    //Saving choise of the background color 
    if(document.body.classList.contains("light-background")){
        localStorage.setItem("theme", "enabled");
    }
    else{
     localStorage.setItem("theme", "disabled");
    }


});


//Secret word
const secretWord= "418";
let userInput="";

const popUp=document.getElementById("popup-418");
const modalClose = document.getElementById("modal-close");

function openPopUp(){
    if (!popUp) return;
    popUp.classList.add("open");
}

function closePopUp() {
    if (!popUp) return;
    popUp.classList.remove("open");
}

document.addEventListener("keydown", (e)=>{

  if(e.key==="Escape")
     {
        closePopUp();
     }
    if (!popUp) return;
    userInput+=e.key;

    if(userInput.length>secretWord.length){
        userInput=userInput.slice(-secretWord.length);
    }

    if(userInput===secretWord){
        openPopUp();
        userInput="";
    }
});

modalClose.addEventListener("click", closePopUp);

