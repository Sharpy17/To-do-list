import './style.css';
import openInbox from './inbox';
import openToday from './today';
import openThisWeek from './this-week';
import addProject from './projects';



openInbox();

const inboxbtn = document.querySelector(".inbox");
const todaybtn = document.querySelector(".today");
const twbtn = document.querySelector(".this-week");
const addProj = document.querySelector(".add-project");

function clearDOM() {
    let space = document.querySelector(".space");
    space.remove();
}

addProj.addEventListener("click", (() => {
    clearDOM();
    addProject();
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



