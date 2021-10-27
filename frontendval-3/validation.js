document.getElementById("submit").onclick = function() {

    let myTask = document.getElementById("newtask").value;

    if (myTask.includes(">") || myTask.includes("<")) {
        document.getElementById("newTaskError").style.display = "block";
      }

    let newTask = document.createElement("LI");
    newTask.innerHTML = myTask;
    document.getElementById("myTasksList").appendChild(newTask);
}