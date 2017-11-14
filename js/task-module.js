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