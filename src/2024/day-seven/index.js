export function fixPackages(packages) {
    const stack = [];

    for (let char of packages) {
        if (char === ')') {
            let segment = '';

            while (stack.length && stack[stack.length - 1] !== '(') {
                segment += stack.pop();
            }

            stack.pop();

            for (let reversedChar of segment) {
                stack.push(reversedChar);

            }
        } else stack.push(char);
    }

    return stack.join('');
}