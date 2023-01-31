//your code here
let btn=document.getElementById("addTodoBtn")
btn.addEventListener("click",funcall)
function funcall(){
	let store=todoList.createElement("li")
	store.innerText=document.getElementById("newTodoInput").value
    todoList.appendChild(store)
}