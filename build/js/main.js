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

    // formelm.addEventListener('submit',(event) => {
    //   event.preventDefault();
    //   formobj.getValue();
    //   formelm.reset();
    // });
    return formobj;
  }()
);

var app = (function(){
  const form = document.getElementById('task-form');
  form.addEventListener('submit',(event) => {
    event.preventDefault();
    let newtask = formmodule.getValue();
    if(newtask){
      task.add(newtask);
      storage.store(task.TaskArray);
      uimodule.render();
    }
    
    form.reset();
  });
  window.addEventListener('load',(event)=>{
    task.TaskArray = storage.read();
    uimodule.render();
  });
}());
var storage = ( function(){
  var stg = {};
  stg.store = function(arr){
    let data = JSON.stringify(arr);
    window.localStorage.setItem("data",data);
  }
  stg.read = function(){
    if(window.localStorage.getItem("data")){
      let data = window.localStorage.getItem("data");
      return JSON.parse(data);
    }
    else{
      return false;
    }
  }
  return stg;
}());
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

var uimodule = ( function(){
    var module = {};
    
    module.render = function(){
        let tasks = task.TaskArray;
        const listelem = document.getElementById('task-list');
        listelem.innerHTML = "";
        for(let i=0; i<tasks.length; i++){
            let item = tasks[i];
            let li = document.createElement('LI');
            li.setAttribute('data-name',item.name);
            li.setAttribute('data-id',item.id);
            li.setAttribute('data-status',item.status);
            let text = document.createTextNode(item.name);
            li.append(text);
            listelem.append(li);
        }
    }
    
    return module;
} () );