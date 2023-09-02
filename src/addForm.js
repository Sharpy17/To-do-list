import { iForAlphabet, alphabet } from ".";

export default function openForm(projectNumber) {

    // Cache DOM

    const mySpace = document.getElementById(`${projectNumber}`);
    const todaySpace = document.getElementById("1");
    const thisWeekSpace = document.getElementById("2");
    const containers = document.getElementsByClassName(`cont${projectNumber}`);
    const containersArr = Array.from(containers);

    // Global functions

    function findContainer(cont, index) {
        return cont.find(element => {
            return element.getAttribute("id") === index.id;
        })
    }

    function hideOtherItems() {

        if (containers !== null) {
            const containersArr = Array.from(containers);
            const addTask = mySpace.querySelector(".add-task");    
            addTask.classList.add("invisible");
            containersArr.forEach((element) => {
                element.classList.add("invisible");
            })  
        }
    }

    function addForm() {

        hideOtherItems();

        // Containers

        const myContainers = mySpace.getElementsByClassName(`cont${projectNumber}`);
        const myContainersArr = Array.from(myContainers);
        
        // New Elements

        const cont1 = document.createElement("div");
        const cont2 = document.createElement("div");
        const input1 = document.createElement("input");
        const input2 = document.createElement("input");
        const label1 = document.createElement("label");
        const label2 = document.createElement("label");
        const btns = document.createElement("div");
        const addbtn = document.createElement("button");
        const cancelbtn = document.createElement("button");

        btns.classList.add("btns");
        addbtn.classList.add("add-button-styling");
        cancelbtn.classList.add("cancel-button-styling");
        cont1.classList.add("container");
        cont2.classList.add("container");
        input1.classList.add("input-styling");
        input2.classList.add("input-styling");

        mySpace.append(cont1, cont2, btns);
        cont1.append(label1, input1);
        cont2.append(label2, input2);
        btns.append(addbtn, cancelbtn);

        label1.textContent = "Title";
        label2.textContent = "Description";
        addbtn.textContent = "Add";
        cancelbtn.textContent = "Cancel";

        function returnItems() {

            // Buttons

            const radiobtns = mySpace.getElementsByClassName(`rad${projectNumber}`);
            const addTask = mySpace.querySelector(".add-task");
            const radioArr = Array.from(radiobtns);

            cont1.remove();
            cont2.remove();
            btns.remove();

            addTask.classList.remove("invisible");

            myContainersArr.forEach((element) => {
                element.classList.remove("invisible");
            })  

            function deleteTask(index) {

                const myContainers = mySpace.getElementsByClassName(`cont${projectNumber}`);
                const todayContainers = todaySpace.getElementsByClassName(`cont${projectNumber}`);
                const thisWeekContainers = thisWeekSpace.getElementsByClassName(`cont${projectNumber}`);

                const todayArr = Array.from(todayContainers);
                const thisWeekArr = Array.from(thisWeekContainers);
                const myContainersArr = Array.from(myContainers);
            
                const containerToDelete1 = findContainer(myContainersArr, index);
                const containerToDelete2 = findContainer(todayArr, index);
                const containerToDelete3 = findContainer(thisWeekArr, index);

                containerToDelete1.remove();
                containerToDelete2.remove();
                containerToDelete3.remove();
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
            container.classList.add(`cont${alphabet[iForAlphabet]}`);
            container.classList.add(`cont${projectNumber}`);
            container.classList.add("flex-start");
            radio.classList.add("radio");
            radio.classList.add(`rad${alphabet[iForAlphabet]}`);
            radio.classList.add(`rad${projectNumber}`);
            task.classList.add("task");

            radio.setAttribute("type", "radio");
            date.setAttribute("type", "date");
            radio.setAttribute("id", `${alphabet[iForAlphabet]}`);
            container.setAttribute("id", `${alphabet[iForAlphabet]}`);
            date.setAttribute("id", `${alphabet[iForAlphabet]}`);

            mySpace.append(container);
            container.append(radio, task, description, date);

            task.textContent = input1.value;

            if (input2.value === "") {
                description.remove();
            } else {
                description.textContent = input2.value;
            }

            returnItems();
            iForAlphabet++;
        }))

        cancelbtn.onclick = returnItems;
    }
    
    const doYouExist = document.getElementById(`btn${projectNumber}`);

    if (doYouExist === null) {

        const theButton = document.createElement("button");
        
        theButton.textContent = "Add Task +";
        mySpace.append(theButton);

        theButton.classList.add("add-task");
        theButton.setAttribute("id", `btn${projectNumber}`);
        
        theButton.onclick = addForm;
    }
}