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

// *************** Begin Ramon Torres Implementations ***************

// MAP //
Array.prototype.myMap = function (cbFunc) {
    let res = [];

    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;

        res[i] = cbFunc(this[i], i, this);
    }

    return res;
};

// SOME //
Array.prototype.mySome = function (cbFunc) {
    if (this.length === 0) return false;

    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;

        if (cbFunc(this[i], i, this) === true) return true;
    }

    return false;
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

// *************** End Ramon Torres Implementations ***************

// *************** Begin Gregory Vasquez Implementations ***************

// INCLUDES //
Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
    if (fromIndex < this.length) { // Checks if fromIndex < this.length. the length of the array.
        for (let i = 0; i < this.length; i++) { // Iterates through the array.
            if (this[i] === searchElement) {
                return true; // Returns true if item is in the array.
            }
        }
        return false; // Returns false is item is not in the array.
    }
    else {
        return false; // Returns false if fromIndex >= this.length.
    }

};
  
// INDEXOF //
Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
    if (fromIndex < this.length) { // Checks if fromIndex is less than the size of the array
        for (let i = fromIndex; i < this.length; i++) { // Iterates through the array.
            if (this[i] === searchElement) {
                return i; // Returns the first index of the element in the array.
            }
        }
        return -1; // Returns -1 if the element is not found.
    }
    else {
        return -1; // Returns -1 if fromIndex is greater than or equal to the array size. 
    }
};

// *************** End Gregory Vasquez Implementations ***************
  
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

// *************** Begin Tahmina Munni Implementations ***************

// LASTINDEXOF //

/*The lastIndexOf() method returns the last index at which a given 
element can be found in the array, or -1 if it is not present. 
The array is searched backwards, starting at fromIndex.*/

Array.prototype.myLastIndexOf = function (searchElement,fromIndex = this.length - 1) {
  if (fromIndex >= this.length) {
    for (let i = fromIndex; i >= 0; i--) {  // iterating backword, beggining at index 'fromIndex'
      if (this[i] === searchElement) {
        return i; // value found
      }
    }
  } else if (fromIndex < 0) {
    fromIndex = this.length + fromIndex; // compute start index for negative value
  }
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === searchElement) {
      return i; // value found, return i
    }
  }
  return -1; // if value not found, return -1
};
  
// KEYS //

/* The Object.keys() method returns an array of a given 
object's own enumerable property names, iterated in 
the same order that a normal loop would. */

  Object.myKeys = function(obj) {
    var objkeys = [];   //create an empty array
    for(const property in obj){ //iterates through property in given obj
      objkeys.push(property); // pushes property name in new 
    }
    return objkeys;
  };
  
// VALUES //

/* The Object.values() method returns an array of a given object's
own enumerable property values, in the same order as that provided 
by a for...in loop. */

  Object.myValues = function(obj) {
    var valueArray = [];         //Create an empty array 
    for (const property in obj){ //Iterates through property in given object
      valueArray.push(obj[property]); //Pushes property values in new array
    }
    return valueArray;
};

// *************** End Tahmina Munni Implementations ***************
