
document.querySelector("button").addEventListener("click", function(){
    var input = document.getElementById("taskinput").value;
    if (input.trim() === '') {
        alert("Please enter a task");
        return;
    }
    var li = document.createElement("li");
    var taskText = document.createElement("span");
    taskText.textContent = input;
    
    var checkBox = document.createElement("input"); 
    checkBox.type = "checkbox";
    checkBox.classList.add("check-button"); 
    checkBox.addEventListener("change", function() {
        if (this.checked) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "none";
                }
    });

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function(){
        li.parentNode.removeChild(li);
    };

    li.appendChild(checkBox); 
    li.appendChild(taskText);
    li.appendChild(deleteButton);
    document.getElementById("tasklist").appendChild(li);
    document.getElementById("taskinput").value = '';
});
