'use strict'

var myApp = require('../app/library.js');

describe("Test to check if the array generated are all prime numbers", function() {
	describe("Test for invalid input", function(){
		it("should return undefined for an empty string", function() {
      		expect(myApp.getPrimes('')).not.toBeDefined();;
    	});

    	it("should return 'undefined' for a string", function() {
      		expect(myApp.getPrimes('food')).not.toBeDefined();
    	});

    	it("should return `undefined` for `[]`", function() {
      		expect(myApp.getPrimes([])).not.toBeDefined();
   		 });
    	it("should give Array is not allowed when Array is passed", function() {
      		expect(myApp.getPrimes([3,4,6])).not.toBeDefined();
   		 });

   	})
   	describe("Case for booleans", function() {

		    it("should return `undefined` for `true`", function() {
		      expect(myApp.getPrimes(true)).not.toBeDefined();
		    });

		    it("should return `undefined` for `false`", function() {
		      expect(myApp.getPrimes(false)).not.toBeDefined();
		    });

  		});

	describe("Test that constants are computed properly", function(){

		it("should return 'undefined'when negative number is passed", function() {
      		expect(myApp.getPrimes(-12)).not.toBeDefined();
   		});
    	it("should return [ 2, 3, 5, 7 ] when 8 is passed", function() {
      		expect(myApp.getPrimes(8)).toEqual([ 2, 3, 5, 7 ]);
   		});
   		it("should return [ 2, 3, 5, 7, 11, 13 ] when 15 is passed", function() {
      		expect(myApp.getPrimes(15)).toEqual([ 2, 3, 5, 7, 11, 13 ]);
   		});
   		it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ] when 50 is passed", function() {
      		expect(myApp.getPrimes(50)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]);
   		});
   		it("should return [ 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97 ] when 100 is passed", function() {
      		expect(myApp.getPrimes(100)).toEqual([ 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97 ]);
   		});
    })

})