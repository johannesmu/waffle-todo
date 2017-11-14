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