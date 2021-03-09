Understand ES6 Let keyword more better
-----------------------------------
-----------------------------------
#### Consider below code,
 
   * 1. Lets consider below example,
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
        console.log(i);
      }, 1000);
      
     *  Explanation: Intention of this code is to print numbers from 0 to 4 every second.However, it just print number 5 five times.The reason is that after five iterations,the 
        value of i becomes 5 and the five instances of callback function are passed to setTimeout function as the final value of 5.
        We can fix this issue using ES5 IIFFE function,
       
       for (var i = 0; i < 5; i++) {
       (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
       })(i);
       }
       
       Explanation: This function creates new scope and the each time new instances of callback are passed settimeout function().
       In ES6, let keyword declares a new variable in each iteration,
       
       for (let i = 0; i < 5; i++) {
       setTimeout(function () {
          console.log(i);
         }, 1000);
       }
       
       2. Redeclarartion,
           We can redeclare a Variable using var keyword,
            var counter=0;
            var counter;
            console.log (counter);  // Reference error
            
           However, we cant redeclare variable declared using let keyword,
            let counter=0;
            let counter;
            console.log (counter);  //Reference error 
            
        3. Javascript let keyword and hoisting
        
            Consider below code,
            {
              console.log(counter); // Reference error
              let counter = 10;    
            }
            
            It seems that Javascript doesn't hoist let keyword however, it does.In fact, Javascript engine hoists let keyword to the top of page however it does not initialize the
            variable.
            
   4. Temporal death zone:    
            
            Variable declared with Let keyword is called Temporal Death Zone, it starts when the block starts and ends when the variable is accessed.
            Consider below example,
            
            { // enter new scope, TDZ starts
            let log = function () {
             console.log(foo); // foo declared later
            };

            // This is the TDZ and accessing foo 
            // would cause a ReferenceError

            let foo = 10; // TDZ ends
             log(); // called outside TDZ
            }
            
            In this example, TDZ starts with the opening curly brace and ends with let foo=10;
            When we try to access foo variable console.log(foo)(Line no 60), it will throw error. So, TDZ prevents us from accidently referencing variable before its declarartion.
            
   5. When to use Let keyword:
          1. If we need to reassign varibale value.(For example: Let age=32; age=30;)
          2. When we want to declare variables at the top of the file and assign later.

                 
      
