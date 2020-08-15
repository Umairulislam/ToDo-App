var list = document.getElementById("list");
var i = 1;

function addTodo() {
    var todo_item = document.getElementById("todo-item")
    var key = "todo" + i
    firebase.database().ref("To Do/" + key).set(todo_item.value)
    i++;
    


    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)


    //dlt btn
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn2")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)


    //edit btn
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class","btn3")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editBtn)
    li.setAttribute("class","text")

    list.appendChild(li)

    todo_item.value = ""
}


function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e) {
    var val = prompt("Enter updated value",e.paraentNode)
    e.parentNode.firstChild.nodeValue = val;
}



function getdata() {
    firebase.database().ref(i).on("child_added",function(data){
    console.log(data.val())
    })
}
getdata()



