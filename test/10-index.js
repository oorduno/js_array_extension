var assert = require('chai').assert;

describe('index(spec) method', function(){
  var names, children, result;

  beforeEach(function(){
    names = ['Pedro', 'Pablo', 'Obed', 'Juan'];
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
    result = 0;
  });

  it('Should return the index of the element that statisfies the spec', function(){
    var result2, result3, result4;
    var numbers = [0, 1, 2, 3, 4, 5];
    
    result = children.index(function(x){
      return x.name === 'rod';
    });

    result2 = children.index(function(x){
      return x.name === 'bany';
    });

    result3 = names.index('Obed');

    result4 = numbers.index(4);

    assert.equal(result, 6);
    assert.equal(result2, 5);
    assert.equal(result3, 2);
    assert.equal(result4, 4);
  });

  it('Should return -1 if no element matches the spec', function(){
    result = names.index(1);

    assert.equal(result, -1);
  });
});