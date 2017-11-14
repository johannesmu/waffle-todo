var task = (function(){
  var task = {};
  task.TaskArray = [];

  task.add = function(taskname){
    //create a new task object and add to array
    let taskobj = new Task(taskname);
    task.TaskArray.push(taskobj);
  }

  task.remove = function(id){
    //loop through task array and splice (remove) task with the id
    let count = TaskArray.length;
    for(let i=0; i < count; i++){
      let item = TaskArray[i];
      if(item.id == id){
        task.TaskArray.splice(i,1);
      }
    }
  }
  return task;
}());
