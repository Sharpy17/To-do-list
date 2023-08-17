import { currentDate } from ".";

export default function openToday() {

    const space = document.getElementById("1"); 
    const dates = document.getElementsByClassName("date");
    const datesArr = Array.from(dates);

    datesArr.forEach((index) => {
        if (index.value === currentDate) {
            const id = index.id;
            const container = document.querySelector(`.container${id}`);
            space.append(container);
        }
    })

    space.textContent = "Today";
}