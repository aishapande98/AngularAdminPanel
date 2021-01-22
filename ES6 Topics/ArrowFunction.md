1. What is arrow function?
  
  1.Arrow function allows us to write a function with shorter syntax, 
   
    let add = (x,y) => x + y;
    console.log(add(10,20)); // 30;
   
    In the line let add = (x,y) => x + y; if we used braces then we must specify the return statement,
    let add = (x,y) => {return (x + y)};
   
  2. Javascript doesn't allow you to line break after parameter defination,
     let multiply = (x,y) 
     => x * y; 
     
     Above code will throw syntax error message.However,below code will work perfectly,
     
     let multiply = (x,y) => 
     x * y;
     
  3. Difference between arrow function and regular function,
   
      1.We cant use arrow function as a function constructor,when try to create object using new keyword from an arrow function,will get an error.
      
  4. When we should not use arrow function
	    
		An arrow function doesn't have its own this method and arguments object.There we should not use it as an event handler,a method of an object, a method of a class, or
		a prototype method or when you have a function that uses the arguments object.
       
      
   
