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
    if (data.style) element.style.cssText = data.style;
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


function Container() {
    this.container = createElement({container:document.body,tagName:"div",className:"app_container"});
    this.divsContainer1 = createElement({container:this.container,tagName:"div",className:"app_divsContainer"});
    this.div1 = createElement({container:this.divsContainer1,tagName:"div",className:"app_divs",style:"width:60vh;height:40vh;border-radius:0 0 5vw 0"});
    this.div2 = createElement({container:this.divsContainer1,tagName:"div",className:"app_divs",style:"width:70vh;height:40vh;border-radius:0 0 0 5vw"});
    this.divsContainer2 = createElement({container:this.container,tagName:"div",className:"app_divsContainer"});
    this.div3 = createElement({container:this.divsContainer2,tagName:"div",className:"app_divs",style:"width:70vh;height:40vh;border-radius:0 5vw 0 0"});
    this.div4 = createElement({container:this.divsContainer2,tagName:"div",className:"app_divs",style:"width:60vh;height:40vh;border-radius:5vw 0 0 0"});
    this.logo = createElement({container:this.container,tagName:"h1",className:"app_logo",innerHTML:"CAPPAC"});
    this.container_s = createElement({container:this.container,tagName:"div",className:"app_container_s"});
    this.setLogoPosition();
    window.addEventListener("resize",()=> {this.setLogoPosition()});
}
Container.prototype.setLogoPosition = function() {
    let logoP = this.logo.getBoundingClientRect();
    this.logo.style.left = innerWidth - logoP.width + "px";
}

let container = new Container();

function MenuOption(container,data = {name:"MATERIALS",action:"materialsSetDisplay"}) {
    this.data = data;
    this.container = createElement({container,tagName:"a",href:"javascript:;",className:"menuOption_container",innerHTML:data.name});
    this.container.addEventListener("click",()=> {
        appContext.get("appContainer_s").innerHTML = "";
        appContext.get(data.action)();
    })
}

function Menu(options = [{name:"MATERIALS",action:"materialsSetDisplay"}]) {
    this.display = true;
    this.container = createElement({container:document.body,tagName:"div",className:"menu_container"});
    this.optionsContainer = createElement({container:this.container,tagName:"div",className:"menu_optionsContainer"});
    this.div1 = createElement({container:this.container,tagName:"div",className:"menu_div1"});
    this.button = createElement({container:this.container,tagName:"a",className:"menu_button",innerHTML:"<div><div></div><div></div><div></div></div>",href:"javascript:;"});
    this.button.addEventListener("click",()=> {this.setDisplay()});
    this.name = createElement({container:this.optionsContainer,tagName:"h1",className:"menu_name",innerHTML:"MENU"});
    this.options = options.map(data => new MenuOption(this.optionsContainer,data));
    this.setDisplay();
}
Menu.prototype.setDisplay = function() {
    let close = -(this.container.getBoundingClientRect().width - this.button.getBoundingClientRect().width);
    let open  = 0;
    if(this.display) {
        this.container.style.left = close + "px";
        this.display = false;
    }else {
        this.container.style.left = open + "px";
        this.display = true;
    }
  
}

let menu = new Menu([{name:"MODELS",value:"modelsSetDisplay"},{name:"AKSESUARS",value:"aksesuarsSetDisplay"}]);


function Models() {
    this.display = false;
    // appContext.set("modelsSetDisplay",this.setDisplay.bind(this));
}
Models.prototype.setDisplay = function(container = container.container_s,data = JSON.stringify([{name:"Alt dolabi",id:"1324355689",descripcion:"18mm beyaz mdflam"}])) {
    this.data = JSON.parse(data);
    this.container = createElement({container,tagName:"div",className:"models_container"});
    this.addButton = createElement({container,tagName:"span",className:"material-symbols-rounded",innerHTML:"add",id:"models_addButton"});
    window.addEventListener("resize",this.setAddButtonPosition);
    this.setAddButtonPosition();
}
Models.prototype.setAddButtonPosition = function() {
    let p = this.addButton.getBoundingClientRect();
    this.addButton.style.top = innerHeight - p.height + "px";
    this.addButton.style.left = innerWidth - p.width + "px";
}

let models = new Models();
models.setDisplay(container.container_s);

