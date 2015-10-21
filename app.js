addTask=function(){
    priority=document.querySelector("#priority").value;
    list=document.querySelector("#todolist");
    textbox=document.querySelector("#input");
    contents=document.createTextNode(textbox.value);
    newLi=document.createElement("li");
    check=document.createElement("input");
    check.setAttribute("type","checkbox");
    check.setAttribute("onchange","checkedOff()")
    newLi.classList.add(priority);
    list.appendChild(newLi);
    newLi.appendChild(check);
    newLi.appendChild(contents);
    
}

checkedOff=function(){
    
}
