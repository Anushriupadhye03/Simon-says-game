let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");



btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(event) {
    //console.dir(event.target.nodeName); //nodeName---> which element triggered the event
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    } 
})
// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//     delbtn.addEventListener("click", function() {
//     let par = this.parentElement;
//     //console.log(par);
//     par.remove();
//     });
//}// eventListener only has access/ works on existing elements, therefore we use "Event Delegation"
//by using bubbling phenomena
