//your code here
let btn=document.getElementById("addTodoBtn")
btn.addEventListener("click",funcall)
function funcall(){
	if(document.getElementById("newTodoInput").value!=""){
	    let store=document.createElement("li")
	    store.innerText=document.getElementById("newTodoInput").value
        todoList.appendChild(store)
	}
   /* let check=document.createElement("h3")
	document.body.appendChild(check)
	check.innerText="success"*/
}