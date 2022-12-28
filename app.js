var list = document.getElementById("list");


function addTodo(){
    
    var todo_item = document.getElementById("todo-item");
// //create li tag with text node

// var text = todo_item.value
var textNode  = document.createTextNode(todo_item.value)
var li = document.createElement('li')

// li.setAttribute('class','todolist')
li.appendChild(textNode)


list.appendChild(li)



// var li = document.createElement('li');

// var litext = document.createTextNode(todo_item.value);

// li.appendChild(litext);
// list.appendChild(li)


//create delete button

var delbtn = document.createElement("button")
var deltext = document.createTextNode ("Delete")
delbtn.setAttribute("class","btn bg-dark text-white m-1 p-1")
delbtn.setAttribute("onclick","deleteItem(this)")
delbtn.appendChild(deltext)

li.appendChild(delbtn)

// list.appendChild(li)

todo_item.value = ""

console.log(li)

}

function deleteItem(e){
   e.parentNode.remove()  
}

function deleteAll(){
    list.innerHTML = ""
}
