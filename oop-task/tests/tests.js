'use strict'

var User = require('../app/app.js');

describe("Test to check when test is to be taken", function() {
	describe("Test for invalid input", function(){
		it("should return invalid input if user name is a number", function() {
			var hold;
    		if (typeof(User.name === "number")){
    			return (hold = User.name)
    		}
      		expect(User(hold)).toBe("Inavalid User name");
    	});
    	it("should return invalid input if user email is a number", function() {
    		var hold;
    		if (typeof(User.email === "number")){
    			return (hold = User.email) 
    		}
      		expect(User(hold)).toBe("Inavalid User email");
    	});

	    describe("Test to check if password, email or name is null", function(){
	    	it("should return 'Name cannot be empty' if user input no  name", function() {
	    		
	      		expect(User.name).not.toBeNull();
	    	})
	    	it("should return 'Email cannot be empty' if user input no  name", function() {
	    		
	      		expect(User.email).not.toBeNull();
	    	})
	    	it("should return 'Password cannot be empty' if user input no  name", function() {
	    		
	      		expect(User.password).not.toBeNull();
	    	})
	    	it("should return 'Password cannot be empty' if user input no  name", function() {
	    		
	      		expect(User.password).not.toBeTruthy();
	    	})
	  		
	    })
	})
})


