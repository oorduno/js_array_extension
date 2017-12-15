var assert = require('chai').assert;

describe('last(spec) method', function(){
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
    result = [];
  });

  it('Should return the last element that satisfies the spec function', function(){
    var result2;
    result = children.last(function(x){
      return x.sex === 'f';
    });

    result2 = children.last(function(x){
      return x.sex === 'm';
    });

    assert.equal(result.name, 'auro');
    assert.equal(result2.name, 'martin');
  });

  it('Should return null if collection is empty or if there is no match', function(){
    var result;
    
    result = [].last();
    result2 = names.last(function(name){
      return name === 'The Pope';
    });

    assert.isNull(result);
    assert.isNull(result2);
  });

  it('Should return the last element if no spec is defined', function(){
    var result2;
    result = names.last();

    assert.equal(result, 'Juan');
  });
});