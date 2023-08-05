import { i } from ".";
import openInbox from "./inbox";

export default function selectProjects() {

    const allProjects = document.getElementsByClassName("project-to-appear");
    const allProjectsArr = Array.from(allProjects);
    

    body.append(space);

    allProjectsArr.forEach((index) => {
        index.addEventListener("click", (() => {
            let doYouExist = document.getElementById(`${index.textContent}`);
            if (doYouExist === null) {
                openInbox();
                // const body = document.querySelector("body");
                // const space = document.createElement("div");
                // const title = document.createElement("h2");

                // body.append(space);
                // space.append(title);

                // title.textContent = index.textContent;

                // space.setAttribute("id" `${index.textContent}`); 

                

            } else {
                openInbox();
            }
        }))
    })
}