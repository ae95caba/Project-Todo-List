const addProject = ()=>{
    const projectDiv = document.getElementById("new-project");
    const addProjectButton = document.getElementById("add-project")
    const addButton = document.getElementById("add");
    const cancelButton = document.getElementById("cancel");
    const projectsList = document.getElementById("projects-list");
    const input = document.getElementById("input");
    
    addProjectButton.addEventListener("click",()=>{
        addProjectButton.style.display = "none";
        
        projectDiv.style.display = "flex";
    
    })

    
    cancelButton.addEventListener("click",()=>{
        projectDiv.style.display = "none";
        addProjectButton.style.display = "inline"
        input.value = "";
    })

    addButton.addEventListener("click",()=>{
        const newProjectButton = document.createElement("button");
        newProjectButton.innerText = input.value;
       /*  projectsList.appendChild(newProjectButton); */
        projectsList.insertBefore(newProjectButton, addProjectButton)
        projectDiv.style.display = "none";
        addProjectButton.style.display = "inline" 
        input.value = "";
    })
    
    function NewProject(name){
        this.name = name;

    }
}

export default addProject;