const button=document.getElementById("button");
const dialoguebox=document.querySelector(".dialogue_box");

button.addEventListener('click', ()=>{
    dialoguebox.classList.add('config');
});

dialoguebox.addEventListener('click', ()=>{
    if(event.target===dialoguebox){
        dialoguebox.classList.remove('config');
    }
})