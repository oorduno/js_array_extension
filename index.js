Array.prototype.each = function(callback){
  for(var i = 0; i < this.length; i++){
    callback.call(this, this[i], i);
  }
}

Array.prototype.where = function(callback){
  var result = [];

  for(var i = 0; i < this.length; i++){
    if(callback.call(this, this[i])){
      result.push(this[i]);
    } 
  }
  return result;
}