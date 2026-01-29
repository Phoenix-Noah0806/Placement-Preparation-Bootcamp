let num1=30;
let num2=0;
let choice=4;
let result;
switch(choice){
    case 1:
        result=num1+num2;
        console.log(result)
        break;
    case 2:
        result=num1-num2;
        console.log(result)
        break;
    case 3:
        result=num1*num2;
        console.log(result)
        break;
    case 4:
        result=(num2!=0)?(num1/num2):"Division by zero is not possible";
        console.log(result)
        break;
    default:
        console.log("Invalid Choice");
        return;
        

}