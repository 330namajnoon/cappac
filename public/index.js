function createElement(data = {
    container: document.body,
    tagName: "div" || "h1" || "h2",
    innerHTML: "",
    className: "container",
    id: "container",
    style: "",
    type: "",
    value: "",
    placeholder: "",
    href: "",
    attributs: [{ name: "", value: "" }],
}) {
    let element;
    if (data.tagName) element = document.createElement(data.tagName);
    if (data.container) {
        data.container.appendChild(element);
    } else {
        document.body.appendChild(element);
    }
    if (data.id) element.id = data.id;
    if (data.href) element.href = data.href;
    if (data.className) element.className = data.className;
    if (data.innerHTML) element.innerHTML = data.innerHTML;
    if (data.type) element.type = data.type;
    if (data.value) element.value = data.value;
    if (data.attributs) {
        data.attributs.forEach(at => {
            element.setAttribute(at.name, at.value);
        })
    }
    return element;
}


