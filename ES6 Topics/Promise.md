What is Promise?
----------------------------------
----------------------------------

  In Javascript Promise is an object which you hope to return in future but not now.
  Lets consider below examplle to understand the Promise more better,
  Suppose you want to learn JS by next month, however you are not sure if you able to complete the promise.
  A promise has below 3 states,
  1. Pending: You dont know if you able to complete JS course by next month.
  2. Fulfilled: You completed the course.
  3. Rejected: You didn't complete the course.
  
  To create a Promise you need to create a Promise constructor,
  
  let completed=true;
  
  let learnJs= new Promise (function(resolve,reject){
     if (completed){
     resolve("You completed the course")              
      }
     else{
      reject("You didn't completed the course")
      }   
    });
    
   The Promise constructor accepts function as an argument, this function is called executor.
    If you embeded the above code in HTML then you will not able to see the pending state as we set the value of Completed to true, to see the pending state use SetTimeOut() method,
    
   let completed=true;
    
   let learnJs=new Promise(function(resolve,reject){
    setTimeout(() => {
     if(completed){
      resolve("You completed the course")
     }
     else{
      reject("You didn't completed the course");
     } 
     },3 * 1000);
    });
    
   Now, you will see the Pending state till 3 seconds in the console as we set the value of completed to true.
    
   Once the Promise object is created its in Pending state until it is resolved.To schedule a callback once the promise is resolved,use below methods of Promise object.
   * then() method:
        The then() method is used to schedule a callback to be executed once the Promise is suceessfully resolved.
        
   * catch() method:
        The catch() method is uses to schedule a callbak when the Promise is rejected.
        
   * finally() method:
        Sometimes you might want to execute same piece of code when the Promise either rejected or fulfilled, at that time you could use finally() method.
