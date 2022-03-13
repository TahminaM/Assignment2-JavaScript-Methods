// FOR EACH //
Array.prototype.myEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
        if (this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
    }
};

// MAP //
  Array.prototype.myMap = function() {
    // Place your code here.
  };
  
// SOME //
  Array.prototype.mySome = function() {
    // Place your code here.
  };
  
// INCLUDES //
  Array.prototype.myIncludes = function() {
    // Place your code here.
  };
  
// INDEXOF //
  Array.prototype.myIndexOf = function() {
    // Place your code here.
  };
  
// PUSH //
Array.prototype.myPush = function(...args) {  // Use rest parameter to accept any number of input arguments
    let args_index = 0;  // Index of new element
    let length = this.length;   // Length of "this" array
    // The last element of "this" array is at length - 1
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[args_index];  // Add new element to end of "this" array
        args_index++;
    }
    return this.length;  // Return new length of "this" array
};
  
// LASTINDEXOF //
  Array.prototype.myLastIndexOf = function() {
    // Place your code here.
  };
  
// KEYS //
  Object.myKeys = function() {
    // Place your code here.
  };
  
// VALUES //
  Object.myValues = function() {
    // Place your code here.
  };


// *********** Begin Ramon Torres Implementations ***********

// MAP //
Array.prototype.myMap = function () {
    // Place your code here.
};

// SOME //
Array.prototype.mySome = function () {
    // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function (cbFunc, initialVal) {
    if (this.length === 0 && !initialVal) {
        throw new TypeError();
    }

    let acc = (initialVal !== undefined) ? initialVal : undefined;

    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;

        if (acc !== undefined) {
            acc = cbFunc(acc, this[i], i, this);
        } else {
            acc = this[i]
        }
    }

    return acc;

};

// INCLUDES //
Array.prototype.myIncludes = function () {
    // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function () {
    // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function () {
    // Place your code here.
};

// KEYS //
Object.myKeys = function () {
    // Place your code here.
};

// VALUES //
Object.myValues = function () {
    // Place your code here.
};

// *********** End Ramon Torres Implementations ***********
