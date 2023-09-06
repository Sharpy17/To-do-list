import "./style.css";
import openInbox from "./inbox";
import openToday from "./today";
import openThisWeek from "./this-week";
import addProject from "./createProjects";
import deleteElements from "./delete";

export let iForProjects = 3;
export let iForAlphabet = 0;
export const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const inboxbtn = document.querySelector(".inbox");
const todaybtn = document.querySelector(".today");
const twbtn = document.querySelector(".this-week");
const addProj = document.querySelector(".add-project");

export function hideDOM(index) {

    let spaceToShow = document.getElementById(`${index}`);
    for (let i = 0; i < iForProjects + 1; i++) {
        let spaceToHide = document.getElementById(`${i}`);
        if (spaceToHide === null) {
            continue;
        } else if (i !== index) {
            spaceToHide.style.display = "none";
        }   
    }
    if (spaceToShow !== null) {
        spaceToShow.style.display = "flex";
    }
}

addProj.addEventListener("click", (() => {
    addProject();
}))

inboxbtn.addEventListener("click", (() => {
    hideDOM(0);
    openInbox();
}))

todaybtn.addEventListener("click", (() => {
    hideDOM(1);
    openToday();
    deleteElements(1);  
}))

twbtn.addEventListener("click", (() => {
    hideDOM(2);
    openThisWeek();
    deleteElements(2);
}))
