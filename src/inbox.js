export default function openInbox() {

    let i = 0;

    const doYouExist = document.querySelector(".inboxbtn");
    console.log(doYouExist);

    if (doYouExist !== null) {
        const space = doYouExist;
        space.style.display = flex;
        const title = document.querySelector(".title");
        const addTask = document.querySelector("add-task");
    } else {
        const body = document.querySelector("body");
        const space = document.createElement("div");
        const title = document.createElement("h1");
        const addTask  = document.createElement("button");

        body.append(space);
        addTask.classList.add("add-task");
        space.classList.add("inboxbtn");
        title.classList.add("title");
        space.append(title, addTask);

        title.textContent = "Anything";
        addTask.textContent = "Add Task +";
    };

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

        input1.setAttribute("id", `${i}`);
        label1.setAttribute("for", `${i}`);
        input2.setAttribute("id", `${i + 1}`);
        label2.setAttribute("for", `${i + 1}`);

        btns.classList.add("btns");
        addbtn.classList.add("add-button-styling");
        cancelbtn.classList.add("cancel-button-styling");
        cont1.classList.add("container");
        cont2.classList.add("container");
        input1.classList.add("input-styling");
        input2.classList.add("input-styling");

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

            description.classList.add("description");
            date.classList.add("date");
            container.classList.add("container");
            radio.classList.add("radio");
            task.classList.add("task");

            radio.setAttribute("type", "radio");
            date.setAttribute("type", "date");
            description.setAttribute("for", `${i}`);
            radio.setAttribute("id", `${i}`);
            radio.setAttribute("name", `${i}`);
            task.setAttribute("for", `${i}`);
            container.setAttribute("id", `${i}`);
            date.setAttribute("id", `${i}`);

            space.append(container);
            container.append(radio, task, description, date);

            task.textContent = input1.value;

            if (input2.value === "") {
                description.remove();
            } else {
                description.textContent = input2.value;
            }

            returnDOM();
            i++;
        }))

        cancelbtn.onclick = returnDOM;
    }

    addTask.onclick = addForm;

};
