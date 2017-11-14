var task = ( function(){
  var object = {};
  object.taskArray = [];
  object.add = function(taskname){
    let taskitem = new Task(taskname);
    object.taskArray.push(taskitem);
  }
  return object;
}
());