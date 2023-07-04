export default function openToday() {
    const body = document.querySelector("body");
    const space = document.createElement("h1");
    body.append(space);
    space.textContent = "Today";
    space.classList.add("space");
}