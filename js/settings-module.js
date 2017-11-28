var settings = (function(){
  var module = {};
  window.addEventListener('load',() => {
    module.menu = document.querySelector('.settings-panel');
    module.btn = document.querySelector('.settings-button');
    module.form = document.querySelector('#settings');
    module.init();
  });
  module.init = function(){
    module.btn.addEventListener('click',() => {
      //toggle menu
      module.toggleMenu();
    });
    module.form.addEventListener('change',() =>{
      module.getSort();
      task.sort();
      uimodule.render();
    });
    module.getSort();
  }
  module.toggleMenu = function(){
    if( module.menu.classList.contains('open') ){
      // menu is open, remove the open class -- close the menu
      module.menu.classList.remove('open');
      module.btn.classList.remove('open');
    }
    else{
      //menu is closed, open it by adding class open
      module.menu.classList.add('open');
      module.btn.classList.add('open');
    }
  }
  module.getSort = function (){
    module.sort = document.querySelector("[name='sort']:checked").value;
  }
  return module;
}());