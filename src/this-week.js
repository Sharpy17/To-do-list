import { isThisWeek } from 'date-fns';

export default function openThisWeek() {

    // Cache DOM
    
    const mySpace = document.getElementById("2");
    const inboxSpace = document.getElementById("0");
    const title = mySpace.querySelector(".title");
    const dates = document.getElementsByClassName("date");
    const thisWeekContainers = mySpace.getElementsByClassName("flex-start");
    const thisWeekArr = Array.from(thisWeekContainers);
    const datesArr = Array.from(dates);

    title.classList.remove("invisible");

    // Loops
    
    datesArr.forEach(index => {

        const year = String(index.value).slice(0, 4);
        const month = String(index.value).slice(5, 7) - 1;
        const day = String(index.value).slice(8, 10);

        const container = inboxSpace.querySelector(`.cont${index.id}`);
        const clone = container.cloneNode(true)
        const yourMom = thisWeekArr.some(index => index.id === container.id);

        if (isThisWeek(new Date(year, month, day), { weekStartsOn: 1 })) {
            return !yourMom ? mySpace.append(clone) : "Cock";
        } else {
            clone.remove();
        }
    })

    // datesArr.forEach(index => {
    //     const container = mySpace.querySelector(`.cont${index.id}`);
    //     const year = String(index.value).slice(0, 4);
    //     const month = String(index.value).slice(5, 7) - 1;
    //     const day = String(index.value).slice(8, 10);

    //     return !isThisWeek(new Date(year, month, day), { weekStartsOn: 1}) ? container.remove() : "Cock";
    // })
}