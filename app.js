addTask=function(){
    priority=document.querySelector("#priority").value;
    list=document.querySelector("#todolist");
    newLi=document.createElement("li");
    check=document.createElement("input");
    check.setAttribute("type","checkbox");
    newLi.classList.add(priority);
    contents=document.querySelector("#input").value;
    newLi.innerHTML=contents;
    list.appendChild(check);
    list.appendChild(newLi);
    
}
