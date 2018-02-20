class Sorter {
  constructor() {
    this.arr = [];
    this.len = 0;
    this.comparator = function(left,right){return left-right};
  }

  add(element) {
    this.arr.push(element);
    this.len++;
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.len;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
        var arrSort = [];
        for(var i=0;i<indices.length;i++){
                arrSort.push(this.arr[indices[i]]);
        }
        if(indices[1]-indices[0]>=1){
            arrSort.sort(this.comparator);
        }
        if(indices[1]-indices[0]<=-1){
            arrSort.sort(this.comparator).reverse();
        }
        for(i=0;i<indices.length;i++){
                this.arr[indices[i]]=arrSort[i];
        }
  }
  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
