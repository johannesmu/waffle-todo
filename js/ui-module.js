var uimodule = ( function(){
  var module = {};
  const listelem = document.getElementById('task-list');
  module.render = function(){
    let tasks = task.taskArray;
    listelem.innerHTML = "";
    for(let i=0; i<tasks.length; i++){
      let item = tasks[i];
      //create a template
      let listitem = template.create(item);
      // let li = document.createElement('LI');
      // li.setAttribute('data-name',item.name);
      // li.setAttribute('data-id',item.id);
      // li.setAttribute('data-status',item.status);
      // let text = document.createTextNode(item.name);
      
      // li.append(text);
      // listelem.append(li);
      listelem.appendChild(listitem);
    }
  }
  module.bindListener = function() {
    listelem.addEventListener('click', (event) => {
      //get the id of the task
      //itemid = event.target.getAttribute('data-id');
      if(event.target.getAttribute('data-function') == 'status'){
        itemid = event.target.getAttribute('data-id');
        task.changeStatus(itemid,1);
      }
      if(event.target.getAttribute('data-function') == 'delete'){
        itemid = event.target.getAttribute('data-id');
        task.delete(itemid);
      }
      module.render();
      storage.store(task.taskArray);
    });
  }  
  return module;
} () );
