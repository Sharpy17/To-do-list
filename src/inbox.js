import openForm from "./addForm";

export default function openInbox() {

    const doYouExist = document.getElementById("0");

    if (doYouExist === null) {

        const body = document.querySelector("body");
        const space = document.createElement("div");
        const title = document.createElement("h1");
    
        body.append(space);
        space.classList.add("space");
        title.classList.add("title");
        space.append(title);
    
        space.setAttribute("id", "0");
    
        title.textContent = "Inbox";
        openForm("0");
    }
};
