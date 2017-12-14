var assert = require('chai').assert;

describe('any(spec) method', function(){
  var names, people;
  beforeEach(function(){
    names = ['Obed', 'Oscar', 'Omar', 'Osel'];
    people = [ 
      {name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
      {name: 'juan', age: 23, skills: ['PHP', 'Drink tea']  },
      {name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
    ];
  });

  it('Should not modify the original array', function(){
    names.any('Obed');

    assert.deepEqual(names, ['Obed', 'Oscar', 'Omar', 'Osel']);
  });

  describe('spec is a function', function(){
    it('Should be called for every element of the array until it matches', function(){
      var trueResult, result;
      var counter = 0;

      trueResult = names.any(function(name){
        counter++;
        return name === 'Omar';
      });

      result = people.any(function(dev){
        return dev.skills.any(function(skill){return skill === 'PHP'});
      });

      assert.isTrue(result);
      assert.isTrue(trueResult);
      assert.equal(counter, 3);
    })

    it('Should return false if the spec function does not match', function(){
      var falseResult;

      falseResult = names.any(function(name){
        return name === 'Pancho';
      });

      assert.isFalse(falseResult);
    });
  });

  describe('spec is not a function object', function(){
    it('Should return true if spec matches an element of the array', function(){
      var trueResult;

      trueResult = names.any('Osel');

      assert.isTrue(trueResult);
    });

    it('Should return false if spec does not match any element of the array', function(){
      var result;

      result = names.any('Roberto');

      assert.isFalse(result);
    });
  });

});