
       // Default customer age
       let customerAge = prompt("Please enter your age:");

       // Convert the input to a number
       customerAge = Number(customerAge);
       
       // Check for the discount
       if (customerAge >= 65) {
           console.log("You get a 10% discount");
       } else if (customerAge >= 18 && customerAge <= 25) {
           console.log("You get a 5% discount");
       } else {
           console.log("No discount");
       }