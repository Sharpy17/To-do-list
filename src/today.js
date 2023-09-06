import { isToday } from 'date-fns';

export default function openToday() {

    // Cache DOM

    const mySpace = document.getElementById("1"); 
    const inboxSpace = document.getElementById("0");
    const myContainers = mySpace.getElementsByClassName("flex-start");
    const title = mySpace.querySelector(".title");
    const dates = inboxSpace.getElementsByClassName("date");

    const myArr = Array.from(myContainers);
    const datesArr = Array.from(dates);

    title.classList.remove("invisible");

    // Functions

    function appendAClone(elem) {
        const copycat = elem.cloneNode(true);
        mySpace.append(copycat);
    }

    function checkAndAdd(arr, index) {
        const cont = inboxSpace.querySelector(`.cont${index.id}`);
        const existence = arr.some(index => {return index.id = cont.id;})
        return existence ? "Cock" : appendAClone(cont);
    }

    // Loops

    datesArr.forEach((index) => {        

        const year = String(index.value).slice(0, 4);
        const month = String(index.value).slice(5, 7) - 1;
        const day = String(index.value).slice(8, 10);

        if (isToday(new Date(year, month, day))) {
            return myContainers !== null ? checkAndAdd(myArr, index) : appendAClone();
        }
    })

    datesArr.forEach(index => {

        const year = String(index.value).slice(0, 4);
        const month = String(index.value).slice(5, 7) - 1;
        const day = String(index.value).slice(8, 10);

        const container = mySpace.querySelector(`.cont${index.id}`);

        return !isToday(new Date(year, month, day, 12, 0)) ? container.remove() : "Cock";
    })
};
    
