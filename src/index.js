import './style.css';
import openInbox from './inbox';
import openToday from './today';
import openThisWeek from './this-week';
import addProject from './createProjects';

openInbox();

export let i = 0;

const inboxbtn = document.querySelector(".inbox");
const todaybtn = document.querySelector(".today");
const twbtn = document.querySelector(".this-week");
const addProj = document.querySelector(".add-project");

export function clearDOM() {
    let space = document.querySelector(".space");
    space.remove();
}

addProj.addEventListener("click", (() => {
    addProject();
    i++;
}))

inboxbtn.addEventListener("click", (() => {
    clearDOM();
    openInbox();
}))

todaybtn.addEventListener("click", (() => {
    clearDOM();
    openToday();
}))

twbtn.addEventListener("click", (() => {
    clearDOM();
    openThisWeek();
}))



