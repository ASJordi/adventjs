export function decode(message){
    while (message.includes('(')) {
        const start = message.lastIndexOf('(');
        const end = message.indexOf(')', start);

        const sub = message.substring(start + 1, end);
        const r = sub.split('').reverse().join('');
        message = message.replace(message.substring(start, end + 1), r);
    }

    return message;
}
