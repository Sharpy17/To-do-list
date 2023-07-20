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

        const cont1 = document.createElement("div");
        const cont2 = document.createElement("div");
        const input1 = document.createElement("input");
        const input2 = document.createElement("input");
        const label1 = document.createElement("label");
        const label2 = document.createElement("label");
        const btns = document.createElement("div");
        const addbtn = document.createElement("button");
        const cancelbtn = document.createElement("button");

        input1.setAttribute("id", `${iterator}`);
        label1.setAttribute("for", `${iterator}`);
        input2.setAttribute("id", `${iterator + 1}`);
        label2.setAttribute("for", `${iterator + 1}`);

        btns.classList.add("btns");
        addbtn.classList.add("green");
        cancelbtn.classList.add("red");
        cont1.classList.add("container");
        cont2.classList.add("container");

        space.append(cont1, cont2, btns);
        cont1.append(label1, input1);
        cont2.append(label2, input2);
        btns.append(addbtn, cancelbtn);

        label1.textContent = "Title";
        label2.textContent = "Description";
        addbtn.textContent = "Add";
        cancelbtn.textContent = "Cancel";

        function returnDOM() {
            const containers = document.getElementsByClassName("container");
            const radiobtns = document.getElementsByClassName("radio");
            const radioArr = Array.from(radiobtns);
            const containersArr = Array.from(containers);

            cont1.remove();
            cont2.remove();
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
            const description = document.createElement("label");
            const radio = document.createElement("input");
            const date = document.createElement("input");
            const container = document.createElement("div");

            description.classList.add("small");
            date.classList.add("date");
            container.classList.add("container");
            radio.classList.add("radio");
            task.classList.add("black");

            radio.setAttribute("type", "radio");
            date.setAttribute("type", "date");
            description.setAttribute("for", `${iterator}`);
            radio.setAttribute("id", `${iterator}`);
            radio.setAttribute("name", `${iterator}`);
            task.setAttribute("for", `${iterator}`);
            container.setAttribute("id", `${iterator}`);
            date.setAttribute("id", `${iterator}`);

            space.append(container);
            container.append(radio, task, description, date);

            task.textContent = input1.value;

            if (input2.value === "") {
                description.remove();
            } else {
                description.textContent = input2.value;
            }

            returnDOM();
            iterator++;
        }))

        cancelbtn.onclick = returnDOM;
    }

    addTask.onclick = addForm;
};
