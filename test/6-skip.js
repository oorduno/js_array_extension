var assert = require('chai').assert;

describe('each(howMany) method', function(){
  var children, result, names;

  beforeEach(function(){
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
    names = ['Pedro', 'Pablo', 'Obed', 'Juan'];
    result = [];
  });

  it('Should not include the first howMany elements', function(){
    result = names.skip(2);
    var result2 = names.skip(3);
    var result3 = names.skip(4);

    assert.deepEqual(result, ['Obed', 'Juan']);
    assert.deepEqual(result2, ['Juan']);
    assert.deepEqual(result3, []);
  });

  it('Should not modify the original array', function(){
    result = names.skip(3);

    assert.deepEqual(names, ['Pedro', 'Pablo', 'Obed', 'Juan']);
  });

  it('Should not output the same input reference', function(){
    result = names.skip(1);

    assert.notEqual(result, names);
  });
});