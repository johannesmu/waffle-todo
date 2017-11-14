
//form module
var formmodule = (
  function () {
    var formobj = {};
    const formelm = document.getElementById('task-form');
    const inputelm = document.getElementById('task-input');

    formobj.getValue = function() {
      inputval = inputelm.value;
      formobj.val = inputval;
      return inputval;
    }

    formelm.addEventListener('submit',(event) => {
      event.preventDefault();
      formobj.getValue();
      formelm.reset();
    });
    return formobj;
  }()
);
