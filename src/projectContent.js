 const projectContent = (name)=>{
    const currentContent = document.getElementById("content");
    currentContent.remove();
    const content = document.createElement("div");
    content.id = "content";
    const tittle = document.createElement("p");
    tittle.innerText = name;
    tittle.id="tittle";
    const newTaskButton = document.createElement("button");
    newTaskButton.innerText="Add Task";
    content.appendChild(tittle);
    content.appendChild(newTaskButton);
    document.body.appendChild(content);

 }

 export default projectContent;