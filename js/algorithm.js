/*algorithm.js --createdBy Julie
 **usually used algorithm implemention
 */
/*
 **sorting algorithm
 **1. bubble sorting
 **2. insertion sorting
 **3. random sorting
 */
//bubble sorting
Array.prototype.bubbleSort = function() {
  var len = this.length;
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      //循环i之后的元素，若小于i元素则与其交换位置
      if (this[j] < this[i]) {
        var temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};
//insertion sorting
Array.prototype.insertionSort = function() {
  var len = this.length;
  for (var i = 0; i < len; i++) {
    if (this[i - 1] > this[i]) {
      var temp = this[i];
      for (var j = i; j > 0 && this[j - 1] > temp; j--) {
        this[j] = this[j - 1];
      }
      this[j] = temp;
    }
  }
  return this;
};
//random sorting
Array.prototype.shuffle = function(n) {
  var len = this.length,
    num = n ? Math.min(n, len) : len,
    arr = this.slice(0);
  arr.sort(function(a, b) {
    return Math.random() - 0.5;
  });
  return arr.slice(0, num);
};