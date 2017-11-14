var storage = ( function(){
  var stg = {};
  stg.store = function(arr){
    let data = JSON.stringify(arr);
    window.localStorage.setItem("data",data);
  }
  stg.read = function(){
    if(window.localStorage.getItem("data")){
      let data = window.localStorage.getItem("data");
      return new Array(JSON.parse(data));
    }
    else{
      return false;
    }
  }
  return stg;
}());