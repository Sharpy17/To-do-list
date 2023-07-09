export default function openInbox() {

    let iterator = 0;

    const body = document.querySelector("body");
    const space = document.createElement("div");
    const title = document.createElement("h1");
    const addTask = document.createElement("button");

    body.append(space);
    space.classList.add("space");
    space.append(title, addTask);

    title.textContent = "Inbox";
    addTask.textContent = "Add Task +";

    function hideDOM() {
        const containers = document.getElementsByClassName("container");
        const containersArr = Array.from(containers);
        title.classList.add("invisible");
        addTask.classList.add("invisible");
        containersArr.forEach((element) => {
            element.classList.add("invisible");
        })  
    }

    function addForm() {

        hideDOM();

        const input = document.createElement("input");
        const btns = document.createElement("div");
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
            const containers = document.getElementsByClassName("container");
            const radiobtns = document.getElementsByClassName("radio");
            const radioArr = Array.from(radiobtns);
            const containersArr = Array.from(containers);

            input.remove();
            btns.remove();

            title.classList.remove("invisible");
            addTask.classList.remove("invisible");

            containersArr.forEach((element) => {
                element.classList.remove("invisible");
            })  

            function deleteTask(index) {
                const containerToDelete = containersArr.find(element => { 
                    return element.getAttribute("id") === index.id;
                })
                containerToDelete.remove();
            }

            radioArr.forEach((index) => {
                index.addEventListener("click", (() => {
                    deleteTask(index);
                }));
            })
        }

        addbtn.addEventListener("click", (() => {

            const task = document.createElement("label");
            const radio = document.createElement("input");
            const container = document.createElement("div");

            container.classList.add("container");
            radio.classList.add("radio");
            task.classList.add("black");

            radio.setAttribute("type", "radio");
            radio.setAttribute("id", `${iterator}`);
            radio.setAttribute("name", `${iterator}`);
            task.setAttribute("for", `${iterator}`);
            container.setAttribute("id", `${iterator}`);

            space.append(container);
            container.append(task, radio);

            task.textContent = input.value;

            returnDOM();
            iterator++;
        }))

        cancelbtn.onclick = returnDOM;
    }


    addTask.onclick = addForm;
};