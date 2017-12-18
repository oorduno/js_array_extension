/**
* Execute the callback function against every element in the collection
* @function
* @name each
* @param {function} callback - Callback function to execute against every element in th collection
*/
Array.prototype.each = function(callback) {
  var that = this;
  this.forEach(function(element, index) {
    callback.call(that, element, index);
  });
};

/**
* Creates a new array that contains all elements that
* satisfies the given callback function
* @function
* @name where
* @param {function} callback - Callback to decide new elements
* @return {array} New collection with the elements that matched the
* callback function
*/
Array.prototype.where = function(callback) {
  var that = this;
  var result = [];

  this.forEach(function(element, index) {
    if (callback.call(that, element)) {
      result.push(element);
    }
  });

  return result;
};

/**
* Returns true if any of the elements in the array satisfies
* the given spec
* @function
* @name any
* @param {function|*} spec - Function tested for each element in the array
* @return {boolean} If any of the elements matched the spec function
*/
Array.prototype.any = function(spec) {
  if (typeof spec === 'function') {
    for (var i = 0; i < this.length; i += 1) {
      if (spec.call(this, this[i])) {
        return true;
      }
    }
  } else {
    for (var i = 0; i < this.length; i += 1) {
      if (spec === this[i]) {
        return true;
      }
    }
  }

  return false;
};

/**
* Creates a new collection containing the elements returned by
* the spec function
* @function
* @name select
* @param {function} spec - Function that returns the new elements
* @return {array} New collection containing the elements
* returned by the spec function
*/
Array.prototype.select = function(spec) {
  var result = [];
  var that = this;

  if (typeof spec === 'function') {
    this.forEach(function(element, index){
      result.push(spec.call(that, element));
    });
  }

  return result;
};

/**
* Creates a new collection containing 'howMany' elements
* @function
* @name take
* @param {number} howMany - Defines how many elements the the new
* collection will have
* @param {function}[spec] - Function that defines the criteria
* for the new collection elements. If not defined, returns 'howMany'
* elements for the new collection
* @return {array} New collection containing 'howMany' elements
* matched the spec criteria
*/
Array.prototype.take = function(howMany, spec) {
  var result = [];

  if (typeof spec === 'undefined') {
    result = this.slice(0, (howMany));
  } else {
    for (var i = 0; i < this.length; i += 1) {
     if (spec.call(this, this[i]) === true) {
        result.push(this[i]);
        if (howMany <= result.length) {
          break;
        }
      }
    }

  }

  return result;
};

/**
* Produces new Array which will not include the first 'howMany' elements
* @function
* @name skip
* @param {number} howMany - Defines 'howMany' elements to skip for
* the new collection
* @return {array} New collection which not includes the first 'howMany' elements
*/
Array.prototype.skip = function(howMany) {
  var result = [];

  if (howMany < this.length) {
    for (var i = howMany; i < this.length; i += 1) {
      result.push(this[i]);
    }
  }

  return result;
};

/**
* Returns the first element that statisfies the spec, if there is no
* spec then it will return the first array's element.
* @function
* @name first
* @param {function}[spec] - Function that defines the criteria for the
* element returned. If not present, return the first array element.
* @return {*|null} First element that matched the spec criteria.
* Null in case that none element matched or if the collection is empty.
*/
Array.prototype.first = function(spec) {
  if (!this.length) {
    return null
  }

  if (typeof spec === 'undefined') {
    return this[0];
  } else {
    for (var i = 0; i < this.length; i++) {
      if (spec.call(this, this[i]) === true) {
        return this[i];
      }
    }
  }

  return null;
};

/**
* Returns the last array's element that satisfies the given spec
* @function
* @name last
* @param {function}[spec] - Function that defines the criteria for the
* element returned. If not present, return the last array element.
* @return {*|null} Last element that matched the spec criteria.
* Null in case that none element matched or if the collection is empty.
*/
Array.prototype.last = function(spec) {
  var result = null;

  if (!this.length) {
    return result;
  }

  if (typeof spec === 'undefined') {
    result = this[this.length - 1];
  } else {
    for (var i = (this.length - 1); i >= 0; i -= 1) {
      if (spec.call(this, this[i]) === true) {
        return this[i];
      }
    }
  }

  return result;
};

/**
* Returns the number of elements that satisfies the spec
* @function
* @name count
* @param {function}[spec] - Function that defines the criteria for the
* count result. If not present, returns the array's length property.
* @return {number} Number of elements that satisfies the spec criteria.
*/
Array.prototype.count = function(spec) {
  if (typeof spec === 'undefined') {
    return this.length;
  }

  var result = 0;

  this.forEach(function(element, index) {
    if (spec.call(this, element) === true) {
      result += 1;
    }
  }, this);

  return result;
};

/**
* Returns the zero based position in the array fo the element that
* satisfies the spec.
* @function
* @name index
* @param {function|Object} spec - Function that defines the criteria for
* the index result.
* @return {number} Zero based position of the element that satisfy
* the spec criteria. -1 if no element matched.
*/
Array.prototype.index = function(spec) {
  if (typeof spec === 'function') {
    for (var i = 0; i < this.length; i += 1) {
      if (spec.call(this, this[i]) === true) {
        return i;
      }
    }
  } else {
    return this.indexOf(spec);
  }

  return -1;
};

/**
* Returns a new array containing the 'property' values
* @function
* @name pluck
* @param {string} property - Name of the property to retrieve the
* values for the new array
* @return {array} New collection containing the property values
* of the input array.
*/
Array.prototype.pluck = function(property) {
  var result = [];

  this.forEach(function(element, index) {
    if (property in element) {
      result.push(element[property]);
    }
  }, this);

  return result;
};

/**
* Returns the summatory of the result of executing the spec function
* on each array's element.
* @function
* @name sum
* @param {function}[spec] - Function that defines the value for the
* summatory result. If not present, returns the summatory of the
* array elements.
* @return {number|string} Result of the summatory of executing the
* spec function on each array's element.
*/
Array.prototype.sum = function(spec) {
  var result, reducer;

  if (typeof spec === 'undefined') {
    reducer = function(total, currentValue, currentIndex) {
      if (total === null) {
        return currentValue;
      }

      return total + currentValue;
    };
    result = this.reduce(reducer, null);
  } else {
    var specResult;
    reducer = function(total, currentValue) {
      if (total === null) {
        return spec.call(this, currentValue);;
      }

      specResult = spec.call(this, currentValue);
      return total + specResult;
    }.bind(this);

    result = this.reduce(reducer, null);
  }

  return result;
};

/**
* Returns the maximum value in the collection.
* @function
* @name max
* @param {function}[comparer] - Function that receives two parameter
* to compare.
* @return {null|number|string} Returns the max value in the collection,
* null for empty arrays.
*/
Array.prototype.max = function(comparer) {
  if (!this.length) {
    return null;
  }

  var comparerValue;
  var result = 0;

  if (typeof comparer === 'undefined') {
    this.forEach(function(element) {
      if (typeof element !== 'number') {
        throw new Error('Numbers only');
      }
      if (result < element) {
        result = element;
      }
    });
  } else {
    var reducer = function(max, currentValue) {
      if (max === null) {
        return currentValue;
      }
      comparerValue = comparer.call(this, max, currentValue);
      if (comparerValue < 0) {
        return currentValue;
      }

      return max;
    }.bind(this);
    result = this.reduce(reducer, null);
  }

  return result;
};

/**
* Returns the minimum value in the collection.
* @function
* @name min
* @param {function}[comparer] - Function that receives two parameter
* to compare.
* @return {null|number|string} Returns the min value in the collection,
* null for empty arrays.
*/
Array.prototype.min = function(comparer) {
  if (!this.length) {
    return null;
  }

  var comparerValue;
  var result = 0;

  if (typeof comparer === 'undefined') {
    this.forEach(function(element, index) {
      if (typeof element !== 'number') {
        throw new Error('Numbers only');
      }
      if (index === 0 ) {
        result = element;
      }
      if (element < result) {
        result = element;
      }
    });
  } else {
    var reducer = function(min, currentValue) {
      if (min === null) {
        return currentValue;
      }
      comparerValue = comparer.call(this, min, currentValue);

      if (comparerValue > 0) {
        return currentValue;
      }

      return min;
    }.bind(this);

    result = this.reduce(reducer, null);
  }

  return result;
};

/**
* Returns a new flat array, un-nesting arrays within other arrays.
* @function
* @name flatten
* @return {Array} New flat array
*/
Array.prototype.flatten = function() {
  var result = [];

  var reducer = function(last, currentValue) {
    return last.concat(
      Array.isArray(currentValue) ? currentValue.flatten() : currentValue
    );
  };

  result = this.reduce(reducer, []);

  return result;
};

module.exports = Array;