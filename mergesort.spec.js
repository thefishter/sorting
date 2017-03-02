describe('Split Array function', function() {
  it('is able to split even numbered length array into two halves', function() {
    expect( split([5, 8, 6, 10, 2, -3]) ).toEqual([[5, 8, 6], [10, 2, -3]]);
  });
  it('is able to split odd numbered length array into two halves', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
});
});


describe('Merge ', function(){
    it('is able to merge even numbered length array into two halves', function() {
    expect( merge([[5, 8, 6], [10, 2, -3]]) ).toEqual([5, 8, 6, 10, 2, -3]);
  });
  it('is able to merge odd numbered length array into two halves', function() {
    expect(merge([[2, 1], [6, 4, 0]])).toEqual([2, 1, 6, 4, 0]);
  });
});


describe('Merge Sort', function(){
    it('is able to merge sort even numbered length array into two halves', function() {
    expect( mergeSort([5, 8, 6, 10, 2, -3]) ).toEqual([-3, 2, 5, 6, 8, 10]);
  });
  it('is able to merge sort odd numbered length array into two halves', function() {
    expect(mergeSort([2, 1, 6, 4, 0])).toEqual([0, 1, 2, 4, 6]);
  });
});