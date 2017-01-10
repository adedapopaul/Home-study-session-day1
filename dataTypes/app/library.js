module.exports= {
 dataTypes : function (checkString){
 
  //Testing if input is a string
  if (typeof(checkString) === "string"){
    return checkString.length;
  }
  
  else if (checkString=== null ||checkString=== undefined ){
    return "no value";
  }
  
    //Testing if input is an array
  else if(typeof(checkString)==='object'){ 
   
   if(checkString.length<3)
      {
        return undefined;
    }
    else if (checkString!== []){ 
      return checkString[2];
  
    }
  
  }
  //Checking if the argument is a boolean
  else if (checkString=== true || checkString=== false){
    return checkString;
  }
  //Checking if the argument is less than 100
  else if(typeof(checkString===Number))
  { 
    if (checkString< 100){ 
      return "less than 100";
     }
  //Checking if input is greater than 100
  else if (checkString> 100){ 
    return "more than 100";
  }
  //Checking if input is equals to 100
  else if (checkString=== 100){ 
    return "equal to 100";
  }
  }

  //Invoking a function if the argument is a function
  if(typeof(checkString)==='function'){
    return checkString(true);
    }
}
}