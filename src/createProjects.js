import selectProjects from "./projects";

let iSwearItsTheLastIterator = 80000;

export default function addProject() {

    let deleteButton;
    let cont;
    let projectToAppear;

    const projectsDIV = document.querySelector(".projects");
        
    const input = document.createElement("input");
    const addbtn = document.createElement("button");
    const cancelbtn = document.createElement("button");
    const btnsHolder = document.createElement("div");

    projectsDIV.append(input, btnsHolder);
    btnsHolder.append(addbtn, cancelbtn);
    btnsHolder.style.display = "inline";

    addbtn.classList.add("add-button-styling");
    cancelbtn.classList.add("cancel-button-styling");

    addbtn.textContent = "Add";
    cancelbtn.textContent = "Cancel";

    addbtn.addEventListener("click", (() => {
        
        cont = document.createElement("div");

        projectToAppear = document.createElement("button");
        deleteButton = document.createElement("button");

        cont.classList.add("flex-to-appear");
        projectToAppear.classList.add("project-to-appear");
        deleteButton.classList.add("delete-to-appear");

        cont.setAttribute("id", `yomama${iSwearItsTheLastIterator}`);
        deleteButton.setAttribute("id", `${iSwearItsTheLastIterator}`);
        
        projectsDIV.append(cont);
        cont.append(projectToAppear, deleteButton);

        projectToAppear.textContent = input.value;
        deleteButton.textContent = "x";
       
        btnsHolder.remove();
        input.remove();
        selectProjects();

        iSwearItsTheLastIterator++;
    }))
}