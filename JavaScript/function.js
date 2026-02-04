const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}
rl.question(
  "Choose operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n",
  (choice) => {
    rl.question("Enter first number: ", (a) => {
      rl.question("Enter second number: ", (b) => {
        const num1 = Number(a);
        const num2 = Number(b);
        let result;

        switch (choice) {
          case "1":
            result = add(num1, num2);
            break;
          case "2":
            result = sub(num1, num2);
            break;
          case "3":
            result = multiply(num1, num2);
            break;
          case "4":
            result = divide(num1, num2);
            break;
          default:
            console.log("Invalid choice");
            rl.close();
            return;
        }

        console.log("Result:", result);
        rl.close();
      });
    });
  },
);
