///Simple Task List Application
///Author: Joe Hochgreve///

var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0]; //first button
var incompleteTaskHolder = document.getElementById('incomplete-tasks'); //incomplete-tasks
var completedTaskHolder = document.getElementById('completed-tasks'); //completed-tasks

//add a new task
var addTask = function(){
  console.log('Add task...');
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
  console.log('Edit task...');
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
  console.log('Delete task...');
  //when the delete button is pressed
    //remove the parent li from the ul
}

var completeTask = function(){
  console.log('Task complete...');
//mark a task as complete
  //when the checkbox is checked
    //append the completed li to the #completed-tasks ul
}


//mark a task as incomplete
var incompleteTask = function(){
  console.log('Task incomplete...');
  //when the checkbox is unchecked
    //append the incomplete li to the #incomplete-tasks ul
}

var bindTaskEvents = function(taskListItem, checkboxEventHandler){
    //select its children
      //bind editTask to edit button
      //bind deleteTask to delete button
      //bind checkboxEventHandler to checkbox
}

//set the click handler to the add task function
addButton.onclick = addTask;

//cycle over incompleteTaskHolder ul li
  //bind events to li children (completeTask)

//cycle over completedTaskHolder ul li
  //bind events to li children (incompleteTask)
