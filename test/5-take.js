var assert = require('chai').assert;

describe('take(howMany, spec) method', function(){
  var children, result, names;

  beforeEach(function(){
    children = [
      {name: 'ana', sex: 'f'},
      {name: 'fosto', sex: 'm'},
      {name: 'jane', sex: 'f'},
      {name: 'yadi', sex: 'f'},
      {name: 'lili', sex: 'f'},
      {name: 'bany', sex: 'm'},
      {name: 'rod', sex: null},
      {name: 'auro', sex: 'f'},
      {name: 'martin', sex: 'm'}
    ];
    names = ['Pedro', 'Pablo', 'Obed', 'Juan'];
    result = [];
  });

  it('Should return howMany elements if no spec is present', function(){
    var result2 = [];

    result = names.take(3);
    result2 = names.take(10);

    assert.deepEqual(result, ['Pedro', 'Pablo', 'Obed']);
    assert.deepEqual(result2, ['Pedro', 'Pablo', 'Obed', 'Juan']);
  });

  it('Should contain howMany elements that match the spec criteria', function(){
    var numbers = [0,1,2,3,4,5,6,7,8,9,10];
    var result2 = [];
    var result3 = [];

    result = names.take(2, function(name){
      return name === 'Pedro' || name === 'Obed';
    });

    result2 = numbers.take(5, function(number){
      return number > 3;
    });

    result3 = children.take(3, function(x){
      return x.sex === 'f';
    });

    assert.deepEqual(result, ['Pedro', 'Obed']);
    assert.deepEqual(result2, [4,5,6,7,8]);
    assert.deepEqual(result3, [{name: 'ana', sex: 'f'}, {name: 'jane', sex: 'f'}, {name: 'yadi', sex: 'f'}]);
  });

  it('Should not modify the original array', function(){
    result = names.take(3);

    assert.deepEqual(names, ['Pedro', 'Pablo', 'Obed', 'Juan']);
  });

  it('Should not return the same reference', function(){
    result = names.take(3);

    assert.notEqual(result, names);
  });
});