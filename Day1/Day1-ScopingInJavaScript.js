//Solution 1: Female

//global variable
//let genderType ="Female";
let genderType = "Male";


function printGender(){
    let color ="Brown";
    if(genderType. startsWith ("female")){
        var age =30;

        let  color = "pink";
        console.log(color)
    }
    console.log(age);
    }
printGender();
console.log(genderType);


/*
Conclusion:

1. Global variables can be accessed inside functions.
2. var is function scoped.
3. let is block scoped.
4. color prints "pink" inside the block and "Brown" outside the block.
5. age is accessible outside the if-block because it is declared using var.
6. var can be accessed outside the block, but let cannot.
*/

// Solution2 : Male


function printGender() {
    let color = "Brown"
    if ( genderType.startsWith ("female")){

  
        var age =30;
    let color ="pink"

    console.log(age);
    console.log(color);
      }
      console.log(age);
      }
      printGender();
      console.log(genderType);
      

      /*
Conclusion:

1. The global variable genderType is accessible inside the function.
2. Since genderType = "male", the condition becomes false.
3. The if-block does not execute.
4. Therefore, color = "pink" is never created.
5. The function-level color remains "Brown".
6. age is declared using var, so it is hoisted to the function scope.
7. Since the if-block is not executed, age remains undefined.
*/



