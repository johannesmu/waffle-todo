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