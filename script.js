
let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

    function display(input1,input2){
     const num1 = parseInt(input1)
       const num2 = parseInt(input2)

    if(isNaN(num1) || isNaN(num2)){
         return "Invalid input. Please enter a valid number.";
    }

        let sum = num1 + num2;
      return `The sum of ${num1} and ${num2} is ${sum}.`
     }

 alert(display(input1,input2));

