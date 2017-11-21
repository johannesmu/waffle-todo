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
    //check if read returns valid data eg if storage is not empty
    if(storage.read()){
      task.taskArray = storage.read() ;
    }
    uimodule.render();
  });
}());