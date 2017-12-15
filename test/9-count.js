var assert = require('chai').assert;

describe('count(spec) method', function(){
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

  it('Should return the number of elements that satisfies the spec', function(){
    var result2 = 0;
    
    result = names.count(function(name){
      return name === 'Pedro' || name === 'Pablo' || name === 'Juan';
    });

    result2 = children.count(function(x){
      return x.sex === 'f';
    });

    assert.equal(result, 3);
    assert.equal(result2, 5);
  });

  it('Should return the array length if no spec is present', function(){
    result = children.count();

    assert.equal(result, 9);
  });
});