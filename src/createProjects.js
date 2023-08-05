import { i } from ".";

export default function addProject() {

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
        const projectToAppear = document.createElement("button");
        projectToAppear.classList.add("project-to-appear");
        projectToAppear.setAttribute("id", `${i}`);
        projectToAppear.textContent = input.value;
        projectsDIV.append(projectToAppear);
        btnsHolder.remove();
        input.remove();
    }))
}