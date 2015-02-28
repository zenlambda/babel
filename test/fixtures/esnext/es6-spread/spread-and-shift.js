

var TEST_ARRAY = [1,2];

function testShift(...rest) {
  var first = rest.shift(),
    second = rest[0];

  return second;
}

assert.equal(TEST_ARRAY[1], testShift(1,2));
