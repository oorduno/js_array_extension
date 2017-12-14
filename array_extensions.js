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

module.exports = Array;