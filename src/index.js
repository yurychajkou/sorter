class Sorter {
  constructor() {

      this.arr = [];
  }
  add( element ) {

    return this.arr.push(element);
  }

  at( index ) {

      return this.arr[index];
  }

  get length() {

    return this.arr.length;
  }

  toArray() {

    return this.arr;
  }

  sort( indices ) {

      var tmpArr = [];

      for(var i = 0; i < indices.length; i++){

          tmpArr.push(this.arr[indices[i]]);
      }

      tmpArr.sort(function(a, b) {return a-b});
      
      indices.sort(function(a, b) {return a-b});
 
      for( var i = 0; i < indices.length; i++ ){

          this.arr[indices[i]] = tmpArr[i];
      }
  }

  setComparator( compareFunction ) {

    compareFunction = function(a, b) {
      return a-b};
  
  }
}
module.exports = Sorter;