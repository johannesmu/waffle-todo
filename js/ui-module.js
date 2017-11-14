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