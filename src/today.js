import { isToday } from 'date-fns';

export default function openToday() {

    const mySpace = document.getElementById("1"); 
    const inboxSpace = document.getElementById("0");
    const myContainers = mySpace.getElementsByClassName("flex-start");
    const myArr = Array.from(myContainers);
    const title = mySpace.querySelector(".title");
    const dates = document.getElementsByClassName("date");
    const datesArr = Array.from(dates);

    title.classList.remove("invisible");

    datesArr.forEach((index) => {        
        const year = String(index.value).slice(0, 4);
        const month = String(index.value).slice(5, 7) - 1;
        const day = String(index.value).slice(8, 10);

        console.log(isToday(new Date(year, month, day)));

        if (isToday(new Date(year, month, day))) {
            const container = inboxSpace.querySelector(`.cont${index.id}`);
            if(myContainers !== null) {
                const yourMom = myArr.some(index => {
                    return index.id === container.id;
                });
                if (!yourMom) {
                    const copyCat = container.cloneNode(true);
                    mySpace.appendChild(copyCat);
                };   
            } else {
                const copyCat = container.cloneNode(true);
                mySpace.append(copyCat);
            }   
        } else {
           "Cock";
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
    
