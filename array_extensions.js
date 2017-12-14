Array.prototype.each = function(callback){
  var that = this;
  this.forEach(function(element, index){
    callback.call(that, element, index);
  });
};

Array.prototype.where = function(callback){
  var that = this;
  var result = [];

  this.forEach(function(element, index){
    if(callback.call(that, element) === true){
      result.push(element);
    }
  });

  return result;
}

Array.prototype.any = function(spec){
  if(typeof spec === 'function'){

    for(var i = 0; i < this.length; i++){
      if(spec.call(this, this[i]) === true){
        return true;
        //break;
      }
    }

  }else{
    for(var i = 0; i < this.length; i++){
      if(spec === this[i]){
        return true;
        //break;
      }
    }
  }

  return false;
}

module.exports = Array;