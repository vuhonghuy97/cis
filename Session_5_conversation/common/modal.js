class Modal {
    container = document.createElement("div");
    modalContainer = document.createElement("div");

    header = document.createElement("div");
    body = document.createElement("div");
    footer = document.createElement("div");

    btnGroup = document.createElement("div");
    btnCreate = document.createElement("button");
    btnCancel = document.createElement("button");

    constructor() {
        this.container.appendChild(this.modalContainer);
        this.container.classList.add('container');

        this.modalContainer.appendChild(this.header);
        this.modalContainer.appendChild(this.body);
        this.modalContainer.appendChild(this.footer);

        this.btnCreate.innerHTML = "Create";
        this.btnCancel.innerHTML = "Cancel";
        this.btnGroup.classList.add("btn-group");
        this.btnCreate.classList.add("btn", "btn-info");
        this.btnCancel.classList.add("btn", "btn-secondary");
        this.container.appendChild(this.btnGroup);
        this.btnGroup.appendChild(this.btnCancel);
        this.btnGroup.appendChild(this.btnCreate);
    }

    setHeader = (title) => {
        this.header.innerHTML = title;
    };

    setBody = (component) => {
        this.body.innerHTML = "";
        this.body.appendChild(component);
    };

    setOnclickCancel = (listener) => {
        this.btnCancel.onclick = listener;
    };

    setOnclickCreate = (listener) => {
        this.btnCreate.onclick = listener;
    };
}

export { Modal };