///Simple Task List Application
///Author: Joe Hochgreve///

var taskInput; //new-task
var addButton; //first button
var incompleteTaskHolder; //incomplete-tasks
var completedTaskHolder; //completed-tasks

//add a new task
var addTask = function(){
  //when the button is pressed
  //create a new list item with the text from #new-task:
    //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //each element, needs modified and appended
}

//edit exsisting task
var editTask = function(){
  //when the edit button is pressed
    //if the class of the the parent is .editmode
      //switch from edit mode
      //label text becomes the inputs value
    //else
      //switch to .editmode
      //input value becomes labels text
    //Toggle .editmode on the parent
}


//delete an exsisting task
var deleteTask = function(){
  //when the delete button is pressed
    //remove the parent li from the ul
}

var completeTask = function(){
//mark a task as complete
  //when the checkbox is checked
    //append the completed li to the #completed-tasks ul
}


//mark a task as incomplete
var incompleteTask = function(){
  //when the checkbox is unchecked
    //append the incomplete li to the #incomplete-tasks ul
}
