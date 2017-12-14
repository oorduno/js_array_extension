var assert = require('chai').assert;

describe('select(spec) method', function(){
  var people, names;

  beforeEach(function(){
    people = [ 
      {name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
      {name: 'juan', age: 23, skills: ['PHP', 'Drink tea']  },
      {name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
    ];
    names = ['Obed', 'Oscar', 'Osel'];
    result = [];
  });

  it('Should create a new collection of elements that matched the spec function', function(){
    result = people.select(function(dev){
      return dev.name;
    });

    assert.deepEqual(result, ['pedro', 'juan', 'pablo']);
  });

  it('Should not modify the original array', function(){
    result = names.where(function(name){
      return name === 'Obed';
    }).select(function(name){
      return name;
    });

    assert.deepEqual(names, ['Obed', 'Oscar', 'Osel']);
    assert.deepEqual(result, ['Obed']);
  });

  it('Should not return the same reference', function(){
    result = names.select(function(name){
      return name === 'Osel';
    });

    assert.notEqual(result, names);
  });
});