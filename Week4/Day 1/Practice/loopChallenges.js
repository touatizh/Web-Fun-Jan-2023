// Challenge 1: Print odds 1-20
function odd_Numbers() {
    for (let i = 1; i <= 20; i+=2) {
        console.log(i);
    }
}

// Challenge 2: Decreasing Multiples of 3
function divisible_by_3() {
    for (let i = 100; i > 0; i--) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

// Challenge 3: Print the sequence
function log_sequence() {
    let seq = [4, 2.5, 1, -0.5, -2, -3.5];
    for (let i = 0; i < seq.length; i++)
        console.log(seq[i]);
}

// Challenge 4: Sigma
function sigma() {
    let sum = 0;
    for (let i = 1; i <= 100; i++)
        sum = sum + i;
    console.log(sum);
}

// Challenge 5: Factorial
function factorial() {
    let fact = 1;
    for (let i = 2; i <= 12; i++)
        fact = fact * i;
    console.log(fact);
}
