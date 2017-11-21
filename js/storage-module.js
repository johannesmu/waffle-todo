var storage = ( function(){
  var stg = {};
  stg.store = function(arr){
    let data = JSON.stringify(arr);
    stg.data = data;
    window.localStorage.setItem("data",data);
  }
  stg.read = function(){
    if(window.localStorage.getItem("data")){
      try{
        if(JSON.parse(localStorage.getItem("data"))){
          let data = JSON.parse(localStorage.getItem("data"));
        }
      }
      catch(error){
        console.log("error"+error);
      }
      let data = window.localStorage.getItem("data");
      return JSON.parse(data);
    }
    else{
      return false;
    }
  }
  return stg;
}());