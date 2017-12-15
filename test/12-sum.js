var assert = require('chai').assert;

describe('sum(spec) method', function(){
  var names, numbers, children, result, people;

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
    numbers = [1,3,5,7,9,11];
    result = 0;
  });

  it('Should return the summatory of the result of executing the spec function on each element', function(){
    var result2 = 0;
    var result3 = '';
    
    result = numbers.sum(function(x){
      return x * 2;
    });

    result2 = people.sum(function(x){
      return x.age;
    });

    result3 = people.sum(function(x){
      return x.name;
    });

    assert.equal(result, 72);
    assert.equal(result2, (99 + 33 + 19));
    assert.equal(result3, 'ObedOscarJuan');
  });

  it('Should return the summatory of the array\'s element if no spec is present', function(){
    var result2, result3;
    var numbers2 = ['one', 2, 'three', 4];
    var numbers3 = [1, 'two', 3, 'four'];
    
    result = numbers.sum();
    result2 = numbers2.sum();
    result3 = numbers3.sum();

    assert.equal(result, 36);
    assert.equal(result2, 'one2three4');
    assert.equal(result3, '1two3four');
  });

  it('Sould not modify the original array', function(){
     var result2;

     result = numbers.sum();
     result2 = numbers.sum(function(x){
      return x * 2;
     });

     assert.deepEqual(numbers, [1,3,5,7,9,11]);
     assert.deepEqual(numbers, [1,3,5,7,9,11]);
  });
});