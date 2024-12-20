{
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // JavaScript  => TypeScript
    // Optional parameter
    function printName(firstName?: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName); // undefined
    }
    printName('Steve', 'Jobs');
    printName('Ellie');
    printName('Anna');

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // Rest parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
