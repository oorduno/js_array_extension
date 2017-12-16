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

  if(!this.length){
    return result
  }

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

Array.prototype.last = function(spec){
  var result = null;

  if(!this.length){
    return result;
  }

  if(typeof spec === 'undefined'){
    result = this[this.length - 1];
  }else{
    for(var i = (this.length - 1); i >= 0; i--){
      if(spec.call(this, this[i]) === true){
        return this[i];
      }
    }
  }

  return result;
};

Array.prototype.count = function(spec){
  var result = 0;

  if(typeof spec === 'undefined'){
    return this.length;
  }else{
    this.forEach(function(element, index){
      if(spec.call(this, element) === true){
        result++;
      }
    }, this);
  }

  return result;
};

Array.prototype.index = function(spec){
  var result = -1;

  if(typeof spec === 'function'){
    for(var i = 0; i < this.length; i++){
      if(spec.call(this, this[i]) === true){
        return i;
      }
    }
  }else{
    return this.indexOf(spec);
  }

  return result;
};

Array.prototype.pluck = function(property){
  var result = [];

  this.forEach(function(element, index){
    if(property in element){
      result.push(element[property]);
    }
  }, this);

  return result;
};

Array.prototype.sum = function(spec){
  var result, reducer, specResult, initValue;

  if(typeof spec === 'undefined'){
    reducer = function(total, currentValue, currentIndex){
      if(total === null){
        return currentValue;
      }

      return total + currentValue;
    };
    result = this.reduce(reducer, null);
  }else{
    reducer = function(total, currentValue){
      if(total === null){
        return spec.call(this, currentValue);;
      }

      specResult = spec.call(this, currentValue);
      return total + specResult;
    }.bind(this);

    result = this.reduce(reducer, null);
  }

  return result;
};

Array.prototype.max = function(comparer){
  var comparerValue;
  result = 0;

  if(!this.length){
    return null;
  }

  if(typeof comparer === 'undefined'){
    this.forEach(function(element){
      if(typeof element !== 'number'){
        throw new Error('Numbers only');
      }
      if(result < element){
        result = element;
      }
    });
  }else{
    var reducer = function(max, currentValue){
      if(max === null){
        return currentValue;
      }
      comparerValue = comparer.call(this, max, currentValue);
      if(comparerValue < 0){
        return currentValue;
      }

      return max;
    }.bind(this);
    result = this.reduce(reducer, null);
  }

  return result;
};

Array.prototype.min = function(comparer){
  var comparerValue;
  var result = 0;

  if(!this.length){
    return null;
  }

  if(typeof comparer === 'undefined'){
    this.forEach(function(element, index){
      if(typeof element !== 'number'){
        throw new Error('Numbers only');
      }
      if(index === 0){
        result = element;
      }
      if(element < result){
        result = element;
      }
    });
  }else{
    var reducer = function(min, currentValue){
      if(min === null){
        return currentValue;
      }
      comparerValue = comparer.call(this, min, currentValue);

      if(comparerValue > 0){
        return currentValue;
      }

      return min;
    }.bind(this);

    result = this.reduce(reducer, null);
  }

  return result;
};

Array.prototype.flatten = function(){
  var result = [];

  var reducer = function(last, currentValue){
    return last.concat(
      Array.isArray(currentValue) ? currentValue.flatten() : currentValue
    );
  };

  result = this.reduce(reducer, []);

  return result;
};

module.exports = Array;