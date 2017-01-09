// An object-oriented quiz application which have users (a User Function) who take the quiz

var User= function  (theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
}

User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}


//Invoke the User class
// A User 
firstUser = new User("Maggi", "maggi@examnple.com"); 
firstUser.changeEmail("maggiB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10); 

firstUser.showNameAndScores(); //Maggi Scores: 15,10

// Another User
secondUser = new User("Dapo", "Dapo@examnple.com");
secondUser.saveScore(18);
secondUser.showNameAndScores(); //Dapo Scores: 18


// Another User
secondUser = new User("Susan", "Susan@examnple.com");
secondUser.saveScore(24);
secondUser.showNameAndScores(); //Susan Scores: 18