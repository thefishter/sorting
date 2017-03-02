function numerically (a, b) { return a - b; }

function generateArray(size, lower, upper) {
  var randomArray = [];
  while (size--) {
    var randomNum = Math.floor(lower + Math.random() * upper);
    randomArray.push(randomNum);
  }
  return randomArray;
}

describe('Bubble Sort', function(){

 it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array of one element', function(){
    expect( bubbleSort([5]) ).toEqual( [5] );
  });
  
  it('handles an array of numbers', function(){
      spyOn(window, 'compare').and.callThrough(); 
      spyOn(window, 'swap').and.callThrough(); 
      expect( bubbleSort([5, 8, 6, 10, 2, -3]) ).toEqual( [-3, 2, 5, 6, 8, 10] );
      // expect(window.compare.calls.count()).toEqual(30);
      // expect(window.swap.calls.count()).toEqual(10);
  });

  it('handles an array of strings', function(){
    expect( bubbleSort(['c', 'g', 'z', 'h']) ).toEqual( ['c', 'g', 'h', 'z'] );
  });

  for (var i = 2; i < 103; i += 20) {
    it("sorts an array of " + i + " random items", function() {
      var arr = generateArray(i, 0, 100);
      var sorted = arr.slice(0).sort(numerically);
      expect( bubbleSort(arr) ).toEqual( sorted )
    });
  }

});

