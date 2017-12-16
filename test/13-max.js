var assert = require('chai').assert;

describe('max(comparer) method', function(){
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

  it('Should find and return the maximum value in the collection', function(){
    var result2;

    result = children.max(function(a,b){
      return a.name.length - b.name.length;
    });
    result2 = people.max(function(a,b){
      return a.age - b.age;
    })

    assert.equal(result.name, 'martin');
    assert.equal(result2.name, 'pedro');
  });

  it('Should evaluate array element as numbers if no comparer is present', function(){
    var result2;

    result = numbers.max();

    assert.equal(result, 11);
  });

  it('Should return null for empty arrays', function(){
    result = [].max();

    assert.isNull(result);
  });

  it('Should not modify the original array', function(){
    result = numbers.max();

    assert.deepEqual(numbers, [1,3,5,7,9,11]);
  });
});