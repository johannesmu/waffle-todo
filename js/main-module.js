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