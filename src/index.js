import './style.css';
import openInbox from './inbox';
import openToday from './today';
import openThisWeek from './this-week';

openInbox();

const inboxbtn = document.querySelector(".inbox");
const todaybtn = document.querySelector(".today");
const twbtn = document.querySelector(".this-week");

function clearDOM() {
    let space = document.querySelector(".space");
    space.remove();
}

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



