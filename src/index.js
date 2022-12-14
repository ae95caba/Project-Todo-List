import important from "./important";

import allTasks from "./allTasks";

import nextSevenDays from "./nextSevenDays";

import today from "./today";

import todos from "./todos";

import addProject from "./addProject";

import projectContent from "./projectContent";
       
const buttons = document.querySelectorAll("button");


buttons.forEach(button => {
button.addEventListener('mouseover',  ()=> {
    
    if(button.className !=="clicked"){
    button.setAttribute('class', 'hovered');
    }
});

button.addEventListener('mouseout',  ()=> {
    
    if(button.className !=="clicked"){
    button.removeAttribute('class');}

});

button.addEventListener('click',  ()=> {
    
    let previuslyClicked = document.querySelector(".clicked");
    
    if (previuslyClicked==null){}else{
        previuslyClicked.removeAttribute('class');
    }
    
    button.setAttribute('class', 'clicked');
    
    
});


});


const importantButton = document.getElementById("important");
importantButton.addEventListener("click",important);

const allTasksButton = document.getElementById("all-tasks");
allTasksButton.addEventListener("click",allTasks);

const todayButton = document.getElementById("today");
todayButton.addEventListener("click",today);

const nextSevenDaysButton = document.getElementById("next-seven-days");
nextSevenDaysButton.addEventListener("click",nextSevenDays);

const todosButton = document.getElementById("todos");
todosButton.addEventListener("click",()=> projectContent(todosButton.innerText));


addProject();



