export function execute(code) {
    let value = 0;
    let i = 0;

    const LANG = {
        '+': () => value++,
        '-': () => value--,
        '{': () => {
            i = [i, code.indexOf('}', i)][+!value];
        },
        '[': () => {
            i = code.indexOf(']', i);
            value &&= 0;
        }
    }

    while (i < code.length) {
        LANG[code[i++]]?.();
    }

    return value;
}