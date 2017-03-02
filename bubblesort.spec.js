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
      expect(window.compare.calls.count()).toEqual(30);
      expect(window.swap.calls.count()).toEqual(10);
  });


  it('handles an array of strings', function(){
    expect( bubbleSort(['c', 'g', 'z', 'h']) ).toEqual( ['c', 'g', 'h', 'z'] );
  });
});

