import { iForProjects } from ".";
import { hideDOM } from ".";
import openForm from "./addForm";

export default function selectProjects() {
    const allProjects = document.getElementsByClassName("project-to-appear");
    const allProjectsArr = Array.from(allProjects);

    allProjectsArr.forEach((index) => {
        index.addEventListener("click", (() => {
            const doYouExist = document.querySelector(`.${index.textContent}`);
            if (doYouExist === null) {
                const body = document.querySelector("body");
                const space = document.createElement("div");
                const title = document.createElement("h2");

                body.append(space);
                space.append(title);
                space.classList.add("space");

                title.textContent = index.textContent;

                space.classList.add(`${index.textContent}`);
                space.setAttribute("id", `${iForProjects}`);
                openForm(iForProjects);
                hideDOM(iForProjects);
            } else {
                const id = doYouExist.id;
                doYouExist.style.display = "flex";
                hideDOM(id);
            }
            iForProjects++;
        }))
    })
}