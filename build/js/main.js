
//form module
var formmodule = (
  function () {
    var formobj = {};
    const formelm = document.getElementById('task-form');
    const inputelm = document.getElementById('task-input');

    formelm.addEventListener('submit',(event) => {
      event.preventDefault();
    });

    formobj.getValue = function() {
      inputval = inputelm.value;
      return inputval;
    }
    export formobj;
  }()
);
