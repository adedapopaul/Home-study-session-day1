module.exports ={ 
getPrimes : function(number){
    var array=[];
    //return undefined if the argument is an object or string
      if ((typeof(number)=== 'object' ) || (typeof(number)=== 'string')){
        return undefined
      }

      //if the auguement is a number, generate the prime number
      else if (typeof(number)=== 'number'){

        //check if the number passed is negative and return undefined
        if (number < 0){
          return undefined
        }
        else 
          {
        
            for(var i = 2; i<=number;i++){
                var isPrime = true;
                
                //check if the argument is divisible by numbers between 2 and its square root
                for(var j =2;j <=(Math.sqrt(i));j++){
                   if(i%j==0){
                     isPrime=false;
                     break;
                    }
                }
                // push the number that pass the test into an array
                if(isPrime ==true){
                  array.push(i);
                }
                
            }
          }
        return array;
      }
  }
}