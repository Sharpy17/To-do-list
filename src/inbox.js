export default function openInbox() {
    const body = document.querySelector("body");
    const space = document.createElement("div");
    const title = document.createElement("h1");
    const addTask = document.createElement("button");

    body.append(space);
    space.classList.add("space");
    space.append(title, addTask)

    title.textContent = "Inbox";
    addTask.textContent = "Add Task +";

    function clearDOM() {
        title.classList.add("invisible");
        addTask.classList.add("invisible");
    }



    function addForm() {
        clearDOM();

        const input = document.createElement("input");
        const btns = document.createElement("div")
        const addbtn = document.createElement("button");
        const cancelbtn = document.createElement("button");

        btns.classList.add("btns");
        addbtn.classList.add("green");
        cancelbtn.classList.add("red");

        space.append(input, btns);
        btns.append(addbtn, cancelbtn);

        addbtn.textContent = "Add";
        cancelbtn.textContent = "Cancel";

        function returnDOM() {
            input.remove();
            btns.remove();
            title.classList.remove("invisible");
            addTask.classList.remove("invisible");
        }

        addbtn.addEventListener("click", (() => {
            const task = document.createElement("p");
            space.append(task);
            task.textContent = input.value;
            returnDOM();
        }))
    }

    addTask.onclick = addForm;
}