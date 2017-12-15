var assert = require('chai').assert;

describe('first(spec) method', function(){
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

  it('Should return null if the collection is empty or if there is no match', function(){
    var result2 = [];
    var result3 = [];

    result = [].first(function(name){
      return name === 'Santa';
    });

    result2 = names.first(function(name){
      return name === 'Santa';
    });

    result3 = [].first();

    assert.isNull(result);
    assert.isNull(result2);
    assert.isNull(result3);
  });

  it('Should return the first element that satisfies the specification', function(){
    var result2 = {};

    result = names.first(function(name){
      return name === 'Juan' || name === 'Pedro';
    });

    result2 = children.first(function(x){
      return x.sex === 'm';
    });

    assert.equal(result, 'Pedro');
    assert.equal(result2.name, 'fosto');
  });

  it('Should return the very first element if there is no spec function', function(){
    result = names.first();

    assert.equal(result, 'Pedro');
  });
});