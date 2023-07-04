export default function openThisWeek() {
    const body = document.querySelector("body");
    const space = document.createElement("h1");
    body.append(space);
    space.textContent = "This Week";
    space.classList.add("space");
}