console.log("JavaScript...");

/*

    Operator :  
        Operator is one type of symbol. which help to perform a mathemtical and 
        logical operation between oprands. 

        Symbol : + - * / % > <  ! ^ & 

        let a = 10, b = 20

        a + b // 10 + 20

        Oprands : Variable / Value

    Types of Operator :

        1. Unary Operator
                -> 1 Oprand

                Two types:
                    i)  Increment (++) : 

                         - Post Increment :
                                syntax : operand++
                         - Pre Increment
                                syntax : ++operand

                    ii) Decrement (--) :

                        - Post Decrement
                        - Pre Decrement


        2. Binary Operator
                2 or more than operands

                Type of Binary Operator:
                    1. Arithmetic Operator (+ - * / %)
                    2. Assignment Operator (= += -= *= /= %=) 
                    3. Comparison(Conditional) Operator (== != > < >= <= === !==) (ans : true or false)
                    4. Logical Operator (&& || !) (AND OR NOT)
                    5. Bitwise Operator (^ & | ` >> << ~) (Binary (0,1))

        3. Ternory Operator

            Syntax : (condition) 
                            ? true statement 
                            : false statement ;
*/

let num = 25;

// num--; // num =  num - 1 // num = 25 - 1
// --num; // num = 1 - num // 1 - 25

console.log("Number : ", num--); // 25
console.log("Number : ", num); // 24

let a = 10,
  b = 5;
// let ans = ++a * b--; // 11 * 5 = 55

// let ans = a + b;

b -= a; //  b = b - a;

console.log("Ans : ", b);

let n = 10; // 10
console.log(++n, n--, n++, --n); // 11 11 10 10
