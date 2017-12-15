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
};

Array.prototype.any = function(spec){
  if(typeof spec === 'function'){

    for(var i = 0; i < this.length; i++){
      if(spec.call(this, this[i]) === true){
        return true;
      }
    }

  }else{
    for(var i = 0; i < this.length; i++){
      if(spec === this[i]){
        return true;
      }
    }
  }

  return false;
};

Array.prototype.select = function(spec){
  var result = [];
  var that = this;

  if(typeof spec === 'function'){
    this.forEach(function(element, index){
      result.push(spec.call(that, element));
    });
  }

  return result;
};

Array.prototype.take = function(howMany, spec){
  var result = [];

  if(typeof spec === 'undefined'){
    result = this.slice(0, (howMany));
  }else{
    for(var i = 0; i < this.length; i++){
     if(spec.call(this, this[i]) === true){
        result.push(this[i]);
        if(howMany <= result.length){
          break;
        }
      }
    }

  }

  return result;
};

Array.prototype.skip = function(howMany){
  var result = [];

  if(howMany < this.length){
    for(var i = howMany; i < this.length; i++){
      result.push(this[i]);
    }
  }

  return result;
};

Array.prototype.first = function(spec){
  var result = null;

  if(typeof spec === 'undefined'){
    return this[0];
  }else{
    for(var i = 0; i < this.length; i++){
      if(spec.call(this, this[i]) === true){
        return this[i];
      }
    }
  }

  return result;
};

module.exports = Array;