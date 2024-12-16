export function removeSnow(s) {
    let stack = [];

    for (let char of s) {
        if (stack.length && stack[stack.length - 1] === char) stack.pop();
        else stack.push(char);
    }

    return stack.join('');
}