console.log('Test');

// function factorial(int) {
//     if(!Number.isInteger(int) || typeof(int) !== 'number'){
//         console.log('Integer required');
//     } else if (int <= 0) {
//         console.log(1);
//     } else {
//         let a = int;
//         for (let i = int -1; i > 1; i--) {
//             a *= i;
            
//         }
//         console.log(a);
//     }
// }

// factorial(5);

function factorial(int) {
    if(!Number.isInteger(int) || typeof(int) !== 'number'){
        return 'Integer required';
    } else if (int <= 0) {
        return 1;
    } else {
        return int * factorial(int - 1);
    }
}
factorial(2);