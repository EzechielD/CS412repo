const p2a = ([left, operator, right]) => {
    switch(operator) {
        case '+':
            console.log(`Left: ${left} Op: ${operator} Right: ${right}`);
            return (expression) => Number(left) + Number(right);
        case '-':
            console.log(`Left: ${left} Op: ${operator} Right: ${right}`);
            return (expression) => Number(left) - Number(right);
        case '*':
            console.log(`Left: ${left} Op: ${operator} Right: ${right}`);
            return (expression) => Number(left) * Number(right);
        case '/':
            console.log(`Left: ${left} Op: ${operator} Right: ${right}`);
            return (expression) => Number(left) / Number(right);
        case '^':
            console.log(`Left: ${left} Op: ${operator} Right: ${right}`);
            return (expression) => Number(left) ** Number(right);
    }
};

/* Test */
console.log(`P2A: ${p2a('8/8')()}`);
console.log(`P2A: ${p2a('8+9')()}`);
console.log(`P2A: ${p2a('4*6')()}`);
console.log(`P2A: ${p2a('2^4')()}`);
console.log(`P2A: ${p2a('7-3')()}`);