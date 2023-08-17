import './style.css';
import openInbox from './inbox';
import openToday from './today';
import openThisWeek from './this-week';
import addProject from './createProjects';

openInbox();

export let iForProjects = 3;
export let iForInbox = 0;
export const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


const inboxbtn = document.querySelector(".inbox");
const todaybtn = document.querySelector(".today");
const twbtn = document.querySelector(".this-week");
const addProj = document.querySelector(".add-project");

export function hideDOMForNatives(index) {

    let spaceToShow = document.getElementById(`${index}`);
    for (let i = 0; i < iForProjects + 1; i++) {
        let spaceToHide = document.getElementById(`${i}`);
        if (spaceToHide === null) {
            continue;
        } else if (i !== index) {
            spaceToHide.style.display = "none";
        }   
    }
    spaceToShow.style.display = "flex";
}

addProj.addEventListener("click", (() => {
    addProject();
}))

inboxbtn.addEventListener("click", (() => {
    hideDOMForNatives(0);
    openInbox();
}))

todaybtn.addEventListener("click", (() => {
    hideDOMForNatives(1);
    openToday();
}))

twbtn.addEventListener("click", (() => {
    hideDOMForNatives(2);
    openThisWeek();
}))

const date = new Date();

let currentDay = String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth() + 1).padStart(2,"0");

let currentYear = date.getFullYear();

export let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

console.log(currentDate); 
