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
