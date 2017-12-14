var assert = require('chai').assert;

describe('where(spec) method', function(){
  var people, result;

  beforeEach(function(){
    people = [
      {name: 'Pedro'},
      {name: 'Pablo'},
      {name: 'Paco'}
    ];
    result = [];
  });

  it('Should include the elements that satisfy the callback specification', function(){
    result = people.where(function(dev){
      return dev.name === 'Pedro';
    });

    assert.deepEqual(result, [{name: 'Pedro'}]);
  });

  it('Should not modify the original array', function(){
    result = people.where(function(dev){
      return dev.name === 'Pedro';
    });

    assert.deepEqual(people, [{name: 'Pedro'},{name: 'Pablo'}, {name: 'Paco'}]);
  });

  it('Should not output the same reference', function(){
    result = people.where(function(dev){
      return dev.name === 'Pedro';
    })

    assert.notEqual(people, result);
  });

  it('Should handle empty arrays', function(){
    result = [].where(function(dev){
      return dev.name === 'Pedro';
    });

    assert.deepEqual(result, []);
  });
});