var assert = require('chai').assert;

describe('flatten() method', function(){
  var test, result;

  beforeEach(function(){
    test = [1,2,3,[4,5,[6, 7, 8], 9, 10, 11, 12, 13, 14], 15, 16];
    result = [];
  });

  it('Should return a flat array, un-nest arrays within arrays', function(){
    result = test.flatten();

    assert.deepEqual(result, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  });

  it('Should not modify the original array', function(){
    result = test.flatten();

    assert.deepEqual(test, [1,2,3,[4,5,[6, 7, 8], 9, 10, 11, 12, 13, 14], 15, 16]);
  });


});