class Task{
  constructor(task){
    this.name = task;
    this.id = new Date().getTime();
    this.status = 0;
    return this;
  }
}


//form module
var formmodule = (
  function () {
    var formobj = {};
    const formelm = document.getElementById('task-form');
    const inputelm = document.getElementById('task-input');

    formobj.getValue = function() {
      inputval = inputelm.value;
      formobj.val = inputval;
      return inputval;
    }

    formelm.addEventListener('submit',(event) => {
      event.preventDefault();
      formobj.getValue();
      formelm.reset();
    });
    return formobj;
  }()
);

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
