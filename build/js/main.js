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
    return formobj;
  }()
);

var task = ( function(){
  var object = {};
  object.taskArray = [];
  
  object.add = function(taskname){
    let taskitem = new Task(taskname);
    object.taskArray.push(taskitem);
  }
  
  object.changeStatus = function(id,status){
    let taskcount = object.taskArray.length;
    for(let i=0; i<taskcount; i++){
      let item = object.taskArray[i];
      if( item.id == id ){
        item.status = status;
        break;
        return true;
      }
    }
  }
  return object;
}
());
var uimodule = ( function(){
  var module = {};
  const listelem = document.getElementById('task-list');
  module.render = function(){
    let tasks = task.taskArray;
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
  module.bindListener = function() {
    listelem.addEventListener('click', (event) => {
      itemid = event.target.getAttribute('data-id');
      console.log(itemid);
      task.changeStatus(itemid,1)
      module.render();
      storage.store(task.taskArray);
    });
  }  
  return module;
} () );

var storage = ( function(){
  var stg = {};
  stg.store = function(arr){
    let data = JSON.stringify(arr);
    window.localStorage.setItem("data",data);
  }
  stg.read = function(){
    if(window.localStorage.getItem("data")){
      let data = window.localStorage.getItem("data");
      return JSON.parse(data) ;
    }
    else{
      return false;
    }
  }
  return stg;
}());
var template = ( function(){
  var templateobject = {};
  //wait for window to load before selecting the template
  window.addEventListener('load',() => { 
    const tmpl = document.querySelector('#task-template');
    templateobject.template = tmpl;
  });
  
  templateobject.load = function(){
    //import the content of the template
    let taskhtml = document.importNode(templateobject.template.content,true);
    templateobject.html = taskhtml;
  }
  
  return templateobject;
} ());
var app = (function(){
  const form = document.getElementById('task-form');
  form.addEventListener('submit',(event) => {
    event.preventDefault();
    let newtask = formmodule.getValue();
    if(newtask){
      task.add(newtask);
      storage.store(task.taskArray);
      uimodule.render();
    }
    form.reset();
  });
  uimodule.bindListener();
  window.addEventListener('load',() => {
    task.taskArray = storage.read() ;
    uimodule.render();
  });
}());