var assert = require('chai').assert;
var ArrayExtension = require('../array_extensions.js');

describe('each(callback) method', function(){
  var people;
  beforeEach(function() {
    people = [
      {name: 'Pedro', age: 19},
      {name: 'Juan', age: 15},
      {name: 'Pablo', age: 16},
      {name: 'Pancho', age: 20},
      {name: 'Topo', age: 18}
    ];
    Object.seal(people);
  });

  it('Should iterate over all array elements. v2', function(){
    var elementsToIterate = [
      {name: 'pancho', index: 0},
      {name: 'paquita', index: 1},
      {name: 'renata', index: 2},
    ];
    var counter = 0;

    elementsToIterate.each(function(element, i) {
      assert.equal(elementsToIterate[i].name, element.name);
      assert.equal(elementsToIterate[i].index, i);
      counter += 1;
    });

    assert.equal(counter, elementsToIterate.length);
  });

  it('Should iterate over all array elements', function(){
    var counter = 0;

    people.each(function(element, i){
      counter++;
    });

    assert.equal(counter, people.length);
  });

  it('Should receive the element and it\'s index in the array as parameters', function(){
    var result = [];

    people.each(function(element, i){
      result[i] = element;
    });

    assert.deepEqual(people, result);
  });

  it('Should receive a number value for the index parameter', function(){
    var iParam = '';

    people.each(function(element, i){
      iParam = (typeof i);
    });

    assert.strictEqual(iParam, 'number');
  });

  it('Should work with empty ararys', function(){
    var counter = 0;

    [].each(function(element, i){
      counter++;
    });

    assert.equal(counter, 0);
  });

  it('Should follow the index sequence', function(){
    var sequence = [];
    var test = [0, 'one', 'two', 3, {for: 4}];

    test.each(function(element, i){
      sequence.push(i);
    });

    assert.deepEqual(sequence, [0,1,2,3,4]);
  });
});