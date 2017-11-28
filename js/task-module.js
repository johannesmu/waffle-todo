var task = ( function(){
  var object = {};
  object.taskArray = [];
  
  object.add = function(taskname){
    let taskitem = new Task(taskname);
    object.taskArray.push(taskitem);
    object.sort();
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
    object.sort();
  }
  object.delete = function(id){
    let taskcount = object.taskArray.length;
    for(let i=0; i<taskcount; i++){
      let item = object.taskArray[i];
      if( item.id == id ){
        object.taskArray.splice(i,1);
        break;
        return true;
      }
    }
  }
  object.sort = function(){
    if(settings.sort = "status"){
      //sort array according to its status
      object.taskArray.sort(function(task1,task2){
        return parseInt(task1.status) - parseInt(task2.status);
      });
    }
    else if(settings.sort = "date"){
      object.taskArray.sort(function(task1,task2){
        return parseInt(task1.id) - parseInt(task2.id);
      });
    }
  }
  return object;
}
());