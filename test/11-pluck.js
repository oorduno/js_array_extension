var assert = require('chai').assert;

describe('pluck(property) method', function(){
  var names, children, result, people;

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
    people = [
      {name: 'Obed', age: 99},
      {name: 'Oscar', age: 33},
      {name: 'Juan', age: 19}
    ];
    result = [];
  });

  it('Should return a new array containing the \'property\' values', function(){
    var result2 = [];
    var result3 = [];

    result = children.pluck('sex');
    result2 = children.pluck('name');
    result3 = children.pluck('age');

    assert.deepEqual(result, ['f','m','f','f','f','m',null,'f','m']);
    assert.deepEqual(result2, ['ana', 'fosto', 'jane', 'yadi', 'lili', 'bany', 'rod', 'auro', 'martin']);
    assert.deepEqual(result3, []);
  });

  it('Should not modify the original array', function(){
    result = people.pluck('age');

    assert.deepEqual(people, [{name: 'Obed', age: 99},{name: 'Oscar', age: 33},{name: 'Juan', age: 19}]);
  });
});