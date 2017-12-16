var assert = require('chai').assert;

describe('min(comprarer) method', function(){
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
    {name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
    {name: 'juan', age: 23, skills: ['PHP', 'Drink tea']  },
    {name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
    ];
    numbers = [1,3,5,7,9,11];
    result = 0;
  });

  it('Should find and return the minimum value in the collection', function(){
    var result2;

    result = children.min(function(a, b){
      return a.name.length - b.name.length;
    });

    result2 = people.min(function(a, b){
      return a.age - b.age;
    });

    assert.equal(result.name, 'ana');
    assert.equal(result2.name, 'juan');
  });

  it('Should evaluate the array elements as numbers if no comparer function is present', function(){
    var result2;
    
    result = numbers.min();
    result2 = [3219, 444, 12312, 534].min();

    assert.equal(result, 1);
    assert.equal(result2, 444);
  });

  it('Should return null for empty arrays', function(){
    result = [].min();

    assert.isNull(result);
  });

});