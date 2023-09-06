export default function deleteElements(spaceNumber) {

    // Variables or DOM
    
    const mySpace = document.getElementById(`${spaceNumber}`); 
    const inboxSpace = document.getElementById("0");
    const containers = mySpace.getElementsByClassName("flex-start");
    const myRadioBtns = mySpace.getElementsByClassName("rad0");

    const radioArr = Array.from(myRadioBtns);
    const containersArr = Array.from(containers);

    if (spaceNumber == "1") {
        window.anotherSpace = document.getElementById("2");
        window.anotherCont = anotherSpace.getElementsByClassName("flex-start");
        window.anotherArr = Array.from(anotherCont);
    } else {
        window.anotherSpace = document.getElementById("1");
        window.anotherCont = anotherSpace.getElementsByClassName("flex-start");
        window.anotherArr = Array.from(anotherCont);
    }

    // Functions

    function findContainer(cont, index) {
        return cont.find(element => {
            return element.getAttribute("id") === index.id;
        })
    }

    function deleteTask(index) {
        
        const inboxContainers = inboxSpace.getElementsByClassName("cont0");
        const inboxArr = Array.from(inboxContainers);
        const containerToDelete = findContainer(inboxArr, index);
        const myToDelete = findContainer(containersArr, index);
        const anotherToDelete = findContainer(anotherArr, index);

        containerToDelete.remove();
        myToDelete.remove();
        anotherToDelete.remove();
    }

    // Loops

    radioArr.forEach((index) => {
        index.addEventListener("click", (() => {
            deleteTask(index);
        }));
    })
}